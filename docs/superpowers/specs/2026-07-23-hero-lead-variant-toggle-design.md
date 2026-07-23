# Hero Lead Variant Toggle — Design Spec

**Date:** 2026-07-23  
**Scope:** Homepage hero lead (`.hero-lead`) + header nav toggle on `index.html` only  
**Approach:** New `data-hero-lead` attribute separate from existing `data-hero-variant` / hidden contrast toggle

## Goal

Keep the current hero lead design as the default, add a clearly styled alternative lead panel, and let users switch between them via a compact header toggle placed before „Lösung“. In the new variant, the lead’s bottom edge aligns with the bottom edge of the UI pop-up (desktop).

## Decisions (approved)

| Topic | Choice |
| --- | --- |
| What toggles | Hero lead only (title + pop-up stay as today) |
| Default on first visit | `current` (existing lead) |
| Toggle UI | Segment control `Aktuell` \| `Neu` |
| Toggle placement | First item in `.site-nav`, before „Lösung“ |
| Visibility | Homepage only |
| Architecture | `data-hero-lead="current" \| "new"` on `.hero` |
| Existing contrast toggle | Leave hidden / unchanged |

## Behavior

### State

- Attribute on homepage hero: `data-hero-lead="current" | "new"`.
- Default markup and first-visit fallback: `current`.
- Persist selection in `localStorage` under `zuraio-hero-lead`.
- Toggle buttons use `aria-pressed` and a group `aria-label` (e.g. „Hero-Lead-Design wählen“).

### Variant `current`

- No visual change vs. today’s lead: light text, frosted soft-edge `::before`, existing spacing (`margin-top: 60px` on shell), font size 26px.

### Variant `new`

- Lead background: solid `rgba(255, 255, 255, 0.5)` (no soft-edge mask / no frosted fade plate).
- Text color: black (`#000`), no text-shadow.
- Font size: ~20px (smaller than the current 26px), same line structure / content.
- Desktop only: bottom edge of `.hero-lead` aligns with bottom edge of `.hero-popup` by adjusting `.hero-lead-shell` `margin-top` in JS.
- Title alignment and pop-up positioning remain unchanged.

### Alignment algorithm (desktop, `new` only)

1. Measure bounding rects of `.hero-popup` and `.hero-lead` (or shell).
2. Compute delta so lead bottom equals popup bottom.
3. Apply as inline `margin-top` on `.hero-lead-shell` (clamp so it never collapses under the title awkwardly; if delta would be negative beyond a safe minimum, use the minimum).
4. Re-run on: variant switch, window resize, pop-up/lead `ResizeObserver`, and after fonts/images settle.
5. When switching back to `current`, clear the inline margin so CSS `60px` applies again.
6. Below the mobile breakpoint (~980px): do not run bottom alignment (stacked layout); still apply `new` colors/size/background.

### Mobile

- Toggle remains available inside the homepage mobile nav menu.
- `new` styles (white 50%, black, smaller type) apply; no UK alignment to pop-up.

### i18n

- Labels `Aktuell` / `Neu` are fixed German for this iteration (site default language). Optional later: wire into `translations`.

## Files

| File | Change |
| --- | --- |
| `index.html` | Add header lead toggle before „Lösung“; set `data-hero-lead="current"` on `.hero` |
| `styles.css` | Header toggle chrome; `[data-hero-lead="new"]` lead styles; cache-bust coordination via existing `?v=` if needed |
| `script.js` | `setupHeroLeadToggle`, storage, alignment helper; leave `setupHeroVariantToggle` as-is |

## Out of scope

- Changing `.hero-title` copy, size, or position
- Changing `.hero-popup` asset or its title-clearance logic
- Reviving or rewriting the hidden `data-hero-variant` contrast wash
- Subpage headers
- Full redesign of the rest of the homepage

## Verification

- Desktop: default shows current lead; switching to `Neu` updates panel look and UK flush with pop-up; title still clears the pop-up.
- Resize desktop window: UK alignment stays correct in `Neu`.
- Switch back to `Aktuell`: previous lead look and CSS spacing restore.
- Reload: last choice restored from `localStorage`.
- Mobile: toggle in menu; `Neu` styles apply; no broken layout from alignment JS.
- Other pages: no toggle, no regressions.
