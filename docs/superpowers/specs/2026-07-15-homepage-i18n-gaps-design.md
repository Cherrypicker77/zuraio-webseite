# Homepage i18n gaps — Design

**Date:** 2026-07-15  
**Status:** Approved (user: start)

## Goal

On the homepage (`index.html`), switching the language to **EN** or **BR-PT** must show UI copy in that language — no leftover German in visible text, `alt`, or `aria-label`.

## Scope

- In: homepage only
- Languages: EN and BR-PT (existing switcher)
- Out: subpages, new languages, SEO/`hreflang`, architecture refactor

## Approach

Keep the existing `translations` object and `applyLanguage()` pipeline in `script.js`. Audit remaining German after switch, then:

1. Add any missing translation keys (e.g. `ui.heroPopupAlt`)
2. Wire missing DOM updates in `applyLanguage` / helpers
3. Align EN/BR-PT structure where it diverges from DE (e.g. `hero.leadLines` length)

## Known gaps (pre-audit)

- `.hero-popup` `alt` is German and not in `ui` / not applied
- EN/BR-PT `hero.leadLines` has 3 lines; DE has 4
- Zoom alt “Detail:” prefix may stay English for BR-PT

## Success criteria

After selecting EN or BR-PT on the homepage:

- Nav, hero, intro, trust, integrations, assistant showcase, product, team, roadmap, footer, demo modal show the selected language
- Image `alt` / control `aria-label` match the selected language
- Reloading the page keeps the preferred language (existing `localStorage` behaviour)
