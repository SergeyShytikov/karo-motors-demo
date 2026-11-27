# KaRo Motors

[Demo öffnen](https://sergeyshytikov.github.io/karo-motors-demo/)

Deutschsprachiger Website-Entwurf für eine Kfz-Werkstatt in Hennigsdorf. Die Demo enthält die Startseite, Leistungen und Preise, Kontakt und Anfahrt sowie Impressum und Datenschutz. Der Rückrufwunsch öffnet einen E-Mail-Entwurf. Anrufe und versendete E-Mails gehen an die Werkstatt.

## Lokal öffnen

Mit Node.js 24 und npm:

```sh
npm ci
npm run build
```

Danach lässt sich `dist/index.html` direkt im Browser öffnen. `npm run dev` startet den Entwicklungsserver.

## Veröffentlichung

Ein Push auf den Branch `demo` baut die Website mit GitHub Actions und veröffentlicht den Inhalt von `dist/` auf GitHub Pages. Preise und Kontaktdaten stehen in [workshop.ts](src/data/workshop.ts).

## Fotos

Die Fotos illustrieren die Demo. Die Startseite zeigt oben zwei Autos auf Hebebühnen und weiter unten ein Notebook im Fahrzeuginnenraum. „Leistungen & Preise“ zeigt ein silbernes Coupé auf einer Hebebühne, „Kontakt & Anfahrt“ eine graue Limousine in einer hellen Halle. Alle Motive sind verkleinert und werden als WebP von derselben Website geladen.

- Fahrzeuge auf Hebebühnen: [Jae Park auf Pexels](https://www.pexels.com/photo/cars-in-car-repair-shop-4756887/).
- Notebook im Fahrzeug: [ThisIsEngineering auf Pexels](https://www.pexels.com/photo/engineer-testing-sound-system-3862610/).
- Coupé auf der Hebebühne: [Vadym Kudriavtsev auf Unsplash](https://unsplash.com/photos/a-silver-car-on-a-lift-in-a-garage-R2BVAQcigEc).
- Limousine in der Halle: [serjan midili auf Unsplash](https://unsplash.com/photos/a-silver-car-parked-in-a-garage-with-a-checkered-floor-j0Rofs1zRRg).

Für die Pexels-Bilder gilt die [Pexels-Lizenz](https://www.pexels.com/license/), für die Unsplash-Bilder die [Unsplash-Lizenz](https://unsplash.com/license).

## Schriften und Icons

Barlow und Barlow Semi Condensed liegen als WOFF2 in `public/fonts/` und stehen unter der [SIL Open Font License](public/fonts/OFL-Barlow.txt). Die Icons sind SVG-Pfade nach [Lucide](https://lucide.dev/) (ISC-Lizenz). Farben und Schriftregeln stehen in [DESIGN.md](DESIGN.md).

## Marken vor dem Footer

Das [GTÜ-Logo](https://www.gtue.de/fm/871/gtue-logo_rot-grau.png) kennzeichnet die HU/AU vor Ort. Das [Castrol-Service-Logo](https://karo-motors.com/wp-content/uploads/2023/08/castrol.webp) stammt aus dem Bereich „Unsere Partner“ auf der [Website der Werkstatt](https://karo-motors.com/).

Die Markenleiste auf Startseite, Leistungs- und Kontaktseite verlinkt die zugehörigen Leistungen. Die Logos stammen von [MANN-FILTER](https://www.mann-filter.com/de-de.html) und [Bosch Mobility Aftermarket](https://www.boschaftermarket.com/de/de/).
