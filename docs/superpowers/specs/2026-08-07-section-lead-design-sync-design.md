# Section Lead Design Sync — Design Spec

**Date:** 2026-08-07  
**Scope:** Homepage design switcher sync to Integrations + Roadmap; integrations image left-gap fix  
**Approach:** Shared `data-hero-lead` on `.hero`, `.integrations-hero`, and `#roadmap`; CSS mirrors hero variants for title + lead; fade overlays only for fade designs

## Goal

The existing header Design menu controls Hero, Integrations, and Roadmap **in sync**. Title and lead on Integrations and Roadmap follow the same nine lead looks as the hero. Close the left gap on the Integrations hero image.

## Decisions (approved)

| Topic | Choice |
| --- | --- |
| Control | One switcher; all three sections share the same variant |
| Architecture | Approach 1: set `data-hero-lead` on each section root |
| Storage | Existing `localStorage` key `zuraio-hero-lead` |
| Affected copy | Title + lead only |
| Untouched | Eyebrow, CTA/link, Roadmap windows, integration pills, watermark |
| Photo fade | Only for `fade` and `fade-transparent`; off for all other variants |
| Window panel | White / translucent box on **lead only** (not title), matching hero |
| Text color / glow variants | Apply to both title and lead |
| Image gap | Shift Integrations image further left until left edge fills |

## Behavior

### State

- Allowed values unchanged:  
  `current` \| `new` \| `window` \| `fade` \| `fade-transparent` \| `glow-text` \| `glow-text-1` \| `white-text` \| `green-text`.
- `setHeroLeadVariant(variant)` writes `data-hero-lead` to:
  1. `main#home > .hero`
  2. `#integrationen .integrations-hero` (or the section root that owns the hero stack)
  3. `#roadmap`
- Markup: set initial `data-hero-lead="current"` on Integrations hero and Roadmap (same as hero).
- Menu UI and persistence behavior unchanged.

### Per-variant mapping (Integrations + Roadmap)

| Variant | Photo fade | Lead panel | Title + lead text |
| --- | --- | --- | --- |
| `current` | Off | None (transparent) | Existing ink / section colors |
| `new` | Off | `rgba(250, 250, 248, 0.5)` on lead | Title + lead black (`#000`) |
| `window` | Off | Solid `#FAFAF8` on lead | Title + lead black (`#000`) |
| `fade` | Solid white left wash (hero fade recipe) | None | Ink |
| `fade-transparent` | Translucent white left wash (hero recipe) | None | Ink |
| `glow-text` | Off | None | Black + soft white glow (hero values) |
| `glow-text-1` | Off | None | Black + stronger glow (hero values) |
| `white-text` | Off | None | `#FAFAF8` |
| `green-text` | Off | None | `#d0dc9a` |

### Fade implementation detail

- **Integrations:** today’s always-on `.integrations-hero::before` wash becomes variant-gated: active only for `fade` / `fade-transparent` (with matching gradients). For other variants, `::before` is disabled (`content: none` / transparent).
- **Roadmap:** same for `.roadmap::before`.
- Fade gradients reuse the hero fade stop positions and colors (`#fafaf8` solid vs translucent), adapted to each section’s existing `::before` hook.

### Window / lead panel

- Target: `.integrations-lead` and `.roadmap-lead` (roadmap lead is currently a plain `<p>`; keep that element as the panel target).
- Match hero: padding/radius via shared fade vars or equivalent; disable any frosted `::before` masks when using window/new.
- Title elements (`.integrations-title`, `.roadmap-title` / accent as needed) do **not** get a background plate.

### Text / glow colors

- Selectors cover:
  - Integrations: `.integrations-title`, `.integrations-title-line`, `.integrations-lead`, `.integrations-text p`
  - Roadmap: `.roadmap-title`, `.roadmap-title-accent`, `.roadmap-lead`
  - `.roadmap-title-accent`: for `current`, `fade`, and `fade-transparent` keep the existing green accent; for `new`, `window`, `glow-text`, `glow-text-1`, `white-text`, and `green-text` use the same color as `.roadmap-title` (no separate green accent)
- Glow `text-shadow` values copied from hero `glow-text` / `glow-text-1`.

### Integrations image left gap

- Current: `width: calc(100% + 60px)`, `transform: translateX(-60px)`, `object-position: 100% 50%`.
- Increase left shift (and matching width) until the visible left edge of the image meets the section edge with no background strip. Keep `overflow-x: clip` on the wrap. Tune on desktop; verify mobile overrides still cover the frame.

## Files

| File | Change |
| --- | --- |
| `index.html` | `data-hero-lead="current"` on Integrations hero + Roadmap; cache-bust CSS/JS if used |
| `styles.css` | Variant rules for Integrations + Roadmap; gate existing `::before` fades; image shift fix; mobile overrides as needed |
| `script.js` | `setHeroLeadVariant` updates all three roots |

## Out of scope

- Separate per-section design menus
- Changing Roadmap windows / pills / watermark
- New design variants beyond the existing nine
- Subpages outside `index.html`
- i18n of Design menu labels

## Verification

- Choosing any Design option sets the same `data-hero-lead` on Hero, Integrations, and Roadmap and persists across reload.
- Fade wash appears on Integrations/Roadmap **only** for `fade` and `fade-transparent`.
- `new` / `window`: lead has white/translucent panel; title has no panel.
- Glow / White Text / GreenText: title + lead colors (and glow) match hero lead treatment.
- Integrations image: no left background gap on desktop; mobile still full-bleed/cropped correctly.
- Eyebrow, links, pills, Roadmap windows unchanged across variants.
