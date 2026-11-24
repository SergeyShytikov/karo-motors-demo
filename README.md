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
