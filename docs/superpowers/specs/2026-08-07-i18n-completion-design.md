# i18n completion — Design

**Date:** 2026-08-07  
**Status:** Approved (user: passt on scope, architecture, work packages)

## Goal

Finish the existing client-side i18n system so that switching to **DE**, **EN**, or **pt-BR** leaves no leftover German in active UI copy, `alt`, or `aria-label` on in-scope surfaces.

## Decisions (from brainstorming)

| Topic | Choice |
|-------|--------|
| Scope | Gap-fix only (Ansatz 1) — no SEO, no locale URLs, no architecture rewrite |
| Languages | Keep DE / EN / pt-BR |
| Partner page | Wire existing copy only; do not rewrite Impressum-like content |
| Unused translation blobs (`voice`, `project`, …) | Leave in place |
| Screenshots | German UI pixels stay; alts already handled where wired |

## Scope

### In

1. **Preference bug** — Explicitly stored `de` must persist across reload (browser language must not override a stored preference).
2. **Design switcher + hero variant toggle** (homepage) — Translate labels and aria strings; wire into `applyLanguage()` / `applyCommonUILanguage()`.
3. **`so-arbeitet-zuraio`** — Add `detailPageTranslations` entries for DE / EN / pt-BR (hero + meta). Assistant showcase remains on the existing `applyAssistantShowcaseLanguage` path.
4. **Partner** — No content change; ensure language switching continues to apply existing dictionary entries.

### Out

- SEO / `hreflang` / `/en/...` routing
- New languages
- Moving dictionaries to JSON or introducing an i18n library
- Removing unused translation sections
- Replacing German screenshot assets
- Correcting Partner page content

## Architecture

Keep the current pipeline unchanged except for the gaps above:

```text
Language switcher / localStorage (`zuraio-language`)
        ↓
getPreferredLanguage()  →  applyLanguage(code)
        ↓
translations[code]                    → Homepage + shared chrome
detailPageTranslations[code][pageKey] → Detail pages
```

### Preference fix

Today `getPreferredLanguage()` ignores stored `"de"` and falls through to `navigator.language`. Change to:

- If `localStorage` has a normalized valid code (`de` | `en` | `pt-BR`), return it.
- Otherwise fall back to browser language (then default `de` via existing `normalizeLanguage` behaviour).

### Design / hero-variant UI

Add keys under `translations.*.ui` (or a small nested `design` block under `ui`) for:

- Design toggle label and aria (`Design`, choose / select design)
- Design menu options matching current option order:
  - Aktuell
  - Fenster weiss transp.
  - Fenster weiss
  - Fade weiss
  - Fade transparent
  - GlowText
  - Glowtext 1
  - White Text
  - GreenText
- Hero variant group aria + buttons: Aktuell / Alternative

Product-style names that are already English (`GlowText`, `White Text`, `GreenText`) may stay identical across languages. German descriptive labels must be translated for EN and pt-BR.

Apply only when those DOM nodes exist (homepage); detail pages are unaffected.

### `so-arbeitet-zuraio` dictionary

Add page key `so-arbeitet-zuraio` in `i18n-pages.js` for `de`, `en`, and `pt-BR`, following the same shape as other detail heroes:

- `meta.title`
- `hero.eyebrow`
- `hero.title` / `hero.titleHtml` (match existing two-line title structure)
- `hero.lead`
- `hero.imageAlt`

No `articles` required unless the HTML gains article sections later. Showcase copy stays in homepage `translations.assistantShowcase`.

## Files to touch

| File | Change |
|------|--------|
| `script.js` | Fix `getPreferredLanguage`; add design/variant keys; apply in language pipeline |
| `i18n-pages.js` | Add `so-arbeitet-zuraio` for three languages |

HTML changes only if a selector is missing (not expected).

## Success criteria

1. Homepage EN / pt-BR: Design menu and hero-variant toggle are not German.
2. `pages/so-arbeitet-zuraio.html`: Hero eyebrow, title, lead, image alt, and document title follow the selected language.
3. Choosing **DE** explicitly, then reloading, keeps DE even when the browser UI language is EN or pt-BR.
4. Partner page content unchanged; language switch still updates its wired strings.
5. No SEO / routing / dead-code cleanup in this change set.

## Manual verification

- Homepage: switch DE → EN → pt-BR → DE; check Design switcher, variant toggle, nav, hero.
- Open `so-arbeitet-zuraio`, switch languages; confirm hero + showcase.
- Set language to DE, reload with an English browser locale; confirm DE sticks.
- Spot-check one other detail page (e.g. `harness`) still switches correctly.

## Risks / notes

- Design option labels are long in German; keep EN/pt-BR roughly as concise as DE so the menu layout stays usable.
- Cache-bust query params on script tags may need bumping if the live preview caches `script.js` / `i18n-pages.js` aggressively — only if verification shows stale assets.
