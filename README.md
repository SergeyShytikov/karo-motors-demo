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

Die Fotos illustrieren die Demo. Die Startseite zeigt Hände mit einem Ringschlüssel am Motor. Die Aufnahme auf der Preisseite zeigt ein Notebook im Fahrzeuginnenraum. Beide Motive sind für das Layout zugeschnitten und werden als WebP von derselben Website geladen.

- Arbeit am Motor: [Christian Buehner auf Pexels](https://www.pexels.com/photo/a-mechanic-working-on-a-car-engine-27665740/).
- Notebook im Fahrzeug: [ThisIsEngineering auf Pexels](https://www.pexels.com/photo/engineer-testing-sound-system-3862610/).

Für diese Bilder gilt die [Pexels-Lizenz](https://www.pexels.com/license/).
