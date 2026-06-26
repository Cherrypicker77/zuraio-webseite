# Design: Logo-Hintergrund im Abschnitt «Kennst Du das?»

Dokumentation des finalen Designs für das zuraio-Schwunglinien-Logo als Wasserzeichen im Abschnitt `#warum` (`.intro-band`).

**Stand:** Juni 2026  
**Implementierung:** `styles.css` (`.intro-band`, `.intro-band::before`, Ebenen in `main#home`)

---

## Abschnitt

| Eigenschaft | Wert |
|---|---|
| HTML | `<section class="intro-band" id="warum">` |
| Max. Breite | `min(1180px, calc(100% - 36px))` (`--max: 1180px`) |
| Hintergrund | Seitenfarbe `--paper: #f7f6f0` (via `body`) |
| Overflow | `visible` (Logo darf links und oben über den Abschnitt hinausragen) |
| Clipping | `clip-path: inset(-100% -100vw 0 -100vw)` — unten am Abschnittsrand abschneiden, oben/links sichtbar lassen |

---

## Logo-Datei

| Eigenschaft | Wert |
|---|---|
| Datei | `assets/logo/Zuraio_Logo_ohne.svg` |
| Format | SVG (Vektor, skaliert ohne Verpixelung) |
| Form | Grüne Schwunglinie ohne «I» und «0» (nur Markenzeichen) |
| Farbe in SVG | `rgb(159, 175, 82)` = `#9FAF52` (= `--green`) |

---

## Grösse & Position

Das Logo wird über ein `::before`-Pseudo-Element auf `.intro-band` gesetzt.

### Desktop (Standard)

| Eigenschaft | Wert | Beschreibung |
|---|---|---|
| `top` | `-55%` | Ragt nach oben in den Hero-Bereich |
| `bottom` | `-55%` | Ragt nach unten (wird unten per `clip-path` abgeschnitten) |
| `left` | `-38%` | Ragt links über den Abschnitt hinaus |
| `right` | `-16%` | Leicht über die rechte Kante |
| `background-size` | `80% auto` | 80 % der Pseudo-Element-Breite, Seitenverhältnis beibehalten |
| `background-position` | `-10% 58%` | Links versetzt, leicht unterhalb der Mitte |
| `background-repeat` | `no-repeat` | — |

### Mobile (`max-width: 900px`)

| Eigenschaft | Wert |
|---|---|
| `top` / `bottom` | `-45%` |
| `left` / `right` | `-32%` / `-14%` |
| `background-size` | `80% auto` |
| `background-position` | `-10% 58%` |

---

## Transparenz

| Eigenschaft | Wert |
|---|---|
| `opacity` | `0.5` (50 % Deckkraft) |
| Effekt | Flächige grüne Form, halbtransparent über `--paper` |

---

## Ebenen (Vordergrund / Hintergrund)

Stacking-Kontext: `main#home` (`position: relative`).  
Das Hero-Element hat **kein** `isolation: isolate`, damit sich die Ebenen über Abschnittsgrenzen hinweg korrekt überlagern.

| z-index | Element | Rolle |
|---:|---|---|
| `0` | `.hero picture` | Hero-Bild (hinterstes Bild) |
| `1` | `.intro-band::before` | **Logo-Wasserzeichen** |
| `2` | `.hero-copy` | Headline «Deine Arbeit ist bereit…» |
| `2` | `.trust-section` | Abschnitt «Vertrauen & Datenkontrolle» (überdeckt Logo unten) |
| `3` | `.intro-band > *` | Inhalt «Kennst Du das?» (Text, Badges, Karten) |
| `4` | `.hero-features` | Buttons (Sicherheits-Modelle, Skalierbar, …) — **ganz vorne** |

### Verhalten

- Logo ist im **Hero-Headline-Bereich** sichtbar (hinter Text, vor Hero-Bild).
- Logo ist **links** über den Abschnitt hinaus sichtbar (Seitenrand).
- Logo wird **unten** am Ende von `#warum` abgeschnitten und erscheint **nicht** in «Vertrauen & Datenkontrolle».
- Hero-Buttons liegen **immer über** dem Logo und bleiben klickbar (`pointer-events: none` auf dem Logo).

---

## CSS-Referenz (Auszug)

```css
main#home {
  position: relative;
}

.intro-band {
  position: relative;
  overflow: visible;
  clip-path: inset(-100% -100vw 0 -100vw);
}

.intro-band::before {
  content: "";
  position: absolute;
  top: -55%;
  bottom: -55%;
  left: -38%;
  right: -16%;
  background-image: url("assets/logo/Zuraio_Logo_ohne.svg");
  background-repeat: no-repeat;
  background-position: -10% 58%;
  background-size: 80% auto;
  opacity: 0.5;
  pointer-events: none;
  z-index: 1;
}

.intro-band > * {
  position: relative;
  z-index: 3;
}

.hero picture { z-index: 0; }
.hero-copy { z-index: 2; }
.hero-features { z-index: 4; }
.trust-section { z-index: 2; }
```

---

## Markenfarben (Referenz)

| Token | Hex | Verwendung |
|---|---|---|
| `--green` | `#9FAF52` | Logo-Farbe, Highlights |
| `--paper` | `#f7f6f0` | Seitenhintergrund |
| `--line` | `#dfe2dc` | Abschnitt-Trennlinie unten |

---

## Wartung

- Logo ersetzen: Datei `assets/logo/Zuraio_Logo_ohne.svg` tauschen (SVG bevorzugt).
- Grösse anpassen: `background-size` (aktuell `80% auto`).
- Position anpassen: `background-position` (aktuell `-10% 58%`) und `top`/`bottom`/`left`/`right` am `::before`.
- Transparenz anpassen: `opacity` (aktuell `0.5`).
- Ebenen anpassen: `z-index`-Werte in `main#home`-Kontext beachten.

---

# Designelement: «zuraio Logo Hintergrund animiert» (DEAKTIVIERT)

**Stand:** Juni 2026 — Animation entfernt.

Die Meteor-/Schweif-Animation wurde aus dem Logo entfernt. Die statische Logo-Form bleibt als Wasserzeichen erhalten (`.intro-band-mark` / `.logo-anim-band-mark` mit SVG-Pfad, ohne Canvas/Animation).

Die frühere Implementierung (`initIntroBandLogoFlow()` in `script.js`, Canvas `.intro-band-mark-flow` / `.logo-anim-band-mark-flow`) ist nicht mehr aktiv.
