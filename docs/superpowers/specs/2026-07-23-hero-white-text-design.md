# Hero White Text — Design Spec

**Date:** 2026-07-23  
**Scope:** Homepage hero lead design switcher  
**Approach:** New `data-hero-lead="white-text"` variant cloned from GlowText, without glow

## Goal

Add a seventh hero lead look named **White Text** (menu order: directly under Glow Text) where the lead copy sits on the unmodified hero photo with plain white text `#FAFAF8` and no glow.

## Decisions (approved)

| Topic | Choice |
| --- | --- |
| Target | `.hero-lead` / `.hero-lead-line` only |
| Title | Unchanged |
| Photo treatment | Original image; no left fade wash |
| Lead panel | None (`::before` disabled; transparent background) |
| Glow | None (`text-shadow: none`) |
| Lead text color | `#FAFAF8` |
| Menu label | `White Text` |
| Attribute value | `white-text` |
| Menu position | Directly under `Glow Text` |
| Popup UK JS align | Not used (same as `glow-text`) |

## Behavior

### State

- Extend allowed values:  
  `data-hero-lead="current" | "new" | "window" | "fade" | "fade-transparent" | "glow-text" | "white-text"`.
- Persist via existing `localStorage` key `zuraio-hero-lead`.
- Design menu option: label `White Text`, `data-hero-lead="white-text"`, after Glow Text.

### Variant `white-text`

- Same structure as `glow-text`: no photo fade, transparent lead, no frosted `::before`.
- `.hero-lead` / `.hero-lead-line`: color `#FAFAF8`; no `text-shadow`.
- Title, accent, popup, features: unchanged vs. `current` / `glow-text` baseline.
- Desktop lead spacing: shared baseline; no popup-bottom JS alignment.

## Files

| File | Change |
| --- | --- |
| `index.html` | Add design-option after GlowText; bump CSS/JS cache-bust |
| `styles.css` | `[data-hero-lead="white-text"]` lead styles + mobile overrides |
| `script.js` | Add `white-text` to `HERO_LEAD_VARIANTS` |

## Out of scope

- Glow / text-shadow
- Photo fade
- Title color change
- Subpage heroes
- i18n of the Design menu label

## Verification

- Design menu shows **White Text** under **Glow Text**; selecting it sets `data-hero-lead="white-text"` and persists across reload.
- White Text: original photo; lead `#FAFAF8`; no glow; no frosted plate.
- Switching among all seven designs does not break lead spacing or popup clearance.
- Mobile: White Text styles apply; layout remains stacked.
