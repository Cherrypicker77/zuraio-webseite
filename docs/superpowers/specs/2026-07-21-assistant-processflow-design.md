# Assistant Showcase Process Flow

## Goal

Extend the homepage section `#assistent-bei-der-arbeit` with a refined animated process timeline directly below its existing loader. The timeline must use the current showcase screenshots, stay synchronized with the slideshow, and match the site's restrained green, cream, and editorial visual language.

## Visual Design

- Use the approved “Elegante Zeitachse” direction: eight evenly distributed stations on one horizontal line.
- Alternate labels above and below the line to preserve whitespace and legibility.
- Show one softly glowing progress point driven by the same value as the existing loader.
- Give only the active station a slow, low-amplitude pulse; avoid bouncing, rapid flashing, or decorative motion.
- Keep the existing loader as the primary exact progress indicator and the timeline as the semantic process overview.

The stations are:

1. Start — Mail trifft ein
2. Frage 1 — Mail abrufen
3. Frage 2 — Mail zusammenfassen
4. Frage 3 — Termine planen
5. Ergebnis — Mailantwort vorbereiten
6. Frage 4 — Meeting zusammenfassen
7. Frage 5 — Aufgaben setzen
8. Frage 6 — Briefing erstellen

## Synchronization

The timeline derives its state from the existing showcase controller rather than running a separate animation:

- Initial progress maps to “Mail trifft ein”.
- Each question/answer pair maps to its numbered station.
- The answer phase of question 3 maps to the separate “Mailantwort vorbereiten” station.
- The moving point uses the controller's existing absolute progress ratio.
- Pausing because of hover, focus, tab visibility, or reduced-motion preference also pauses the timeline.
- Restarting the slideshow resets both loader and timeline to the beginning without a discontinuity.

## Content and Localization

Add the process labels to each existing `assistantShowcase` translation block in `script.js` so German, English, and Portuguese remain consistent. Add semantic HTML for the timeline in `index.html`, with an accessible status description that updates when the active station changes.

Correct the currently mismatched question 4 and 5 image references to use the existing Meeting and Aufgaben files in `assets/images/Asistent bei der Arbeit/`. No new image assets are required.

## Responsive and Accessibility

- Desktop: all eight stations remain visible in one line.
- Narrow screens: keep a single horizontal timeline in an overflow container and automatically bring the active station into view.
- `prefers-reduced-motion`: remove moving-point interpolation and pulsing while retaining the active state and progress semantics.
- Decorative line and point are hidden from assistive technology; the station list and current state remain readable.

## Files and Verification

- `index.html`: timeline markup and corrected image references.
- `styles.css`: desktop/mobile timeline layout, active states, motion, and reduced-motion rules.
- `script.js`: localized labels, progress mapping, active state updates, and mobile follow behavior.

Verify the full autoplay loop, question/answer transitions, pause/resume conditions, language switching, desktop and mobile layouts, reduced motion, and image loading for questions 4 and 5.
