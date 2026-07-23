# Hero Glow Text + Intro Flucht — Design Spec

**Date:** 2026-07-23  
**Scope:** Homepage hero lead design switcher + desktop left edge of `.hero-copy`  
**Approach:** New `data-hero-lead="glow-text"` variant; align `--hero-copy-left` with intro-band content edge

## Goal

Add a sixth hero lead look named **Glow Text** (menu order: after Fade transparent) where the lead copy sits on the unmodified hero photo with a soft white glow for readability. Separately, bring the hero title and lead onto the same left edge as `.intro-band-title` for **all** hero lead designs.

## Decisions (approved)

| Topic | Choice |
| --- | --- |
| Glow target | `.hero-lead` / `.hero-lead-line` only |
| Title glow | No |
| Photo treatment | Original image; no left fade wash |
| Lead panel | None (`::before` disabled; transparent background) |
| Glow technique | Layered white `text-shadow` (soft halo, reference: white halo around dark text) |
| Lead text color | `var(--ink)` (dark) |
| Menu label | `Glow Text` |
| Attribute value | `glow-text` |
| Menu position | Directly under `Fade transparent` |
| Left alignment scope | All hero lead designs (desktop) |
| Alignment method | CSS only: set `--hero-copy-left` to intro-band left inset |
| Integration / Roadmap | Leave `--content-copy-left` unchanged |
| Popup UK JS align | Not used for `glow-text` (same as fade / current baseline) |

## Behavior

### State

- Extend allowed values:  
  `data-hero-lead="current" | "new" | "window" | "fade" | "fade-transparent" | "glow-text"`.
- Persist via existing `localStorage` key `zuraio-hero-lead`.
- Design menu option: label `Glow Text`, `data-hero-lead="glow-text"`.

### Variant `glow-text`

- Hero photo: no `picture::after` fade (unlike `fade` / `fade-transparent`).
- `.hero-lead`: transparent background; no frosted `::before`.
- `.hero-lead-line`: dark ink color; soft multi-layer white `text-shadow` (0 offset, blur radii tuned to match the soft halo reference — readable on bright sunset areas without a hard outline).
- Title, accent, popup, features: unchanged vs. `current` except for the shared left-edge change below.
- Desktop lead vertical spacing: keep the shared wide-screen baseline (`margin-top: 72px` on `.hero-lead-shell`); do **not** run popup-bottom JS alignment for this variant.

### Left alignment (all variants, desktop)

- Intro band content edge today: centered block  
  `width: min(var(--max), calc(100% - 36px)); margin-inline: auto`  
  → left inset ≈ `(100% - min(var(--max), 100% - 36px)) / 2`.
- Set homepage desktop `--hero-copy-left` to that same inset so `.hero-title` and lead text share the intro-band title’s left edge.
- Base / mobile hero layout stays stacked; do not force the desktop inset formula below the stacked-hero breakpoint.
- `.hero-popup` clearance continues to use `--hero-title-clearance` derived from `--hero-copy-left`, so the popup still clears the headline after the inset change.

## Files

| File | Change |
| --- | --- |
| `index.html` | Add design-option button after Fade transparent; bump CSS/JS cache-bust query if present |
| `styles.css` | `[data-hero-lead="glow-text"]` lead styles; desktop `--hero-copy-left` = intro inset; mobile overrides if needed for glow (no fade wash) |
| `script.js` | Add `glow-text` to `HERO_LEAD_VARIANTS` |

## Out of scope

- Glow on `.hero-title`
- Photo fade / contrast wash for this variant
- Changing `--content-copy-left` for integrations / roadmap
- Subpage heroes
- i18n of the Design menu label
- Reworking window-variant popup UK alignment logic

## Verification

- Design menu shows **Glow Text** under **Fade transparent**; selecting it sets `data-hero-lead="glow-text"` and persists across reload.
- Glow Text: original photo, no left fade; lead dark with soft white halo; no frosted plate; title without glow.
- Desktop, any design: hero title + lead left edge matches `#warum .intro-band-title` left edge (same viewport).
- Switching among all six designs does not break lead spacing or popup clearance.
- Mobile: Glow Text styles apply; layout remains stacked without desktop-inset regressions.
- Other pages: no design menu / no regressions.
