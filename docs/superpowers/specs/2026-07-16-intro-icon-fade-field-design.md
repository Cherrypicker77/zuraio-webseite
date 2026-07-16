# Intro Icon Fade Field — Design Spec

**Date:** 2026-07-16  
**Scope:** `#warum` intro band canvas (`.intro-synapse-canvas`)  
**Approach:** Adapt existing `initIntroDataQuestionVisual` in `script.js` (no new canvas / no changes to trust/product synapse canvases)

## Goal

Replace the current mixed visual (chaos strokes, center ?/brain cluster, drifting icons) with a calm but dense field of **static** integration icons that only fade in and out. The field should feel alive from the moment the page opens: icons continuously appear and disappear at different places, never overlapping, with clear spacing.

## Decisions (approved)

| Topic | Choice |
| --- | --- |
| Density | Dense: ~14–18 icons visible at once |
| Layers | Icons only — remove chaos cloud and center ?/brain |
| Rhythm | Busy overlapping: many icons may be in fade-in/out at once |
| Timing | Strongly varying within max caps |
| Position reuse | No overlap with active icons + short cooldown after a spot is freed |
| Motion | None — positions fixed while visible |
| Distribution | ~75% inner disk, ~25% outer ring |
| Icon content | Random from existing integration icon pool (favored weights may stay) |
| Size | Random per spawn within an existing-style scale range |
| Implementation | Refit `initIntroDataQuestionVisual` |

## Behavior

### Startup

- When the canvas becomes active (page load / section visible), begin spawning fade-ins immediately.
- Ramp toward the target visible count (~14–18) without waiting for a full “wave” to finish.
- There should never be a prolonged idle state where nothing is fading.

### Lifecycle (per icon)

Each spawned icon uses random durations within:

- Fade in: **0.4–2.0 s**
- Hold: **1.0–4.0 s**
- Fade out: **0.4–2.0 s**

Alpha uses a smooth ease (no hard jumps). After fade-out, the slot returns to wait and may respawn at a **new** position.

### Placement

- Sample candidate positions in the marked canvas area.
- **Inner disk ~75%** of spawns; **outer ring ~25%**.
- Reject candidates that collide with currently active/visible icons (including generous padding so spacing feels “schön”).
- Maintain a short **cooldown list** of recently freed positions (approx. **3–6 s**); new spawns must stay clear of those as well.
- If no valid position is found, delay spawn rather than overlap.
- Never place two icons on top of each other.

### Visual style

- Keep existing green tint treatment for integration icons.
- No chaos stroke background.
- No center question-mark / brain cluster.
- CSS for `.intro-band-visual` / `.intro-synapse-canvas` stays as-is unless a tiny sizing tweak proves necessary after implementation (prefer JS-only).

### Reduced motion

- If `prefers-reduced-motion: reduce`, show a small static set of non-cycling icons (or freeze after initial layout). No continuous fade loop.

### Resize / layout change

- On significant canvas resize, recompute valid coordinates for active icons while preserving phase/alpha/timers where practical.
- Re-applied positions must still satisfy spacing + region rules.

## Technical plan (in `script.js`)

### Keep

- Icon asset loading from `assets/icons/integrations`
- `makeTintedIcon` (green fill/stroke)
- Canvas DPR / resize handling
- IntersectionObserver / visibility gating for the animation loop
- `prefers-reduced-motion` handling (retargeted to static field)

### Remove from this intro visual

- Chaos cloud creation/update/draw
- Center icon cluster (? / brain) and related pending fade queues
- Drift / velocity / motion region steering while icons are visible
- Any “only one fade at a time” limiter (conflicts with busy-overlap decision)

### Core data

- Slot pool (~16–20 objects), each with: `phase`, timers, `x`, `y`, `sizeScale`, `imageIndex`, `alpha`, region tag
- `recentPositions[]` cooldown entries: `{x, y, radius, until}`
- Target visible count derived from viewport (narrow ≈ 14, wide ≈ 16–18)

### Scheduler (each frame)

1. Advance timers / alphas for all slots.
2. When an icon finishes fade-out, push its position into the cooldown list.
3. While visible count &lt; target and a free slot exists, attempt spawn (region bias 75/25, collision + cooldown checks).
4. Draw only tinted icons at their fixed positions with current alpha.

### Out of scope

- Trust / product synapse canvases
- Changing the icon asset set (unless load failures require fallbacks)
- New CSS design system for the band
- Backend / i18n

## Verification

Manual checks on desktop and mobile:

1. Soft reload on `#warum` — icons begin fading in immediately.
2. Field stays around 14–18 visible icons; many concurrent fades feel dense but positions stay still.
3. Inner area looks fuller than the outer ring (~75/25).
4. No overlaps; spacing remains comfortable.
5. Freshly vacated spots are not instantly reused.
6. No chaos lines / center ? / brain.
7. With reduced-motion enabled, field does not keep cycling nervously.
8. Resize / orientation change does not produce stacked icons.

## Success criteria

The intro canvas reads as a quiet, continuous constellation of workplace icons: always changing, never moving, never colliding — dense enough to feel full, calm enough not to feel twitchy.
