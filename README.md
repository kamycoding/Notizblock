# Notizblock

Eine kleine Notizen-App, gebaut mit reinem HTML, CSS und JavaScript – ganz ohne Frameworks, Bundler oder externe Bibliotheken.

## Features

- **Notizen** erstellen, archivieren und löschen
- **Drei Bereiche**: Notizen, Archiv und Papierkorb
- **localStorage**: Alle Daten bleiben nach dem Neuladen der Seite erhalten
- **Eingabe-Prüfung**: Eine Notiz wird nur gespeichert, wenn Titel und Inhalt ausgefüllt sind
- **Responsiv**: Funktioniert auf dem Handy und am Desktop

## Projektstruktur

```
notizblock/
├── index.html               # Einstiegspunkt
├── script.js                # Anwendungslogik
├── style.css                # Seiten-Layout
├── scripts/
│   └── templates.js         # HTML-Vorlagen für Notiz-Karten
└── styles/
    ├── standard.css         # Reset und Grundlagen
    ├── assets.css           # Buttons und Eingabefelder
    └── note.css             # Karten-Styling
```

## Lernziele

Dieses Projekt ist als Lernprojekt für JavaScript-Anfänger gedacht. Es übt:

- Arrays und Objekte
- `push()` und `splice()`
- Funktionen und Parameter
- `for`-Schleifen
- DOM-Manipulation mit `innerHTML`
- `localStorage` mit `JSON.stringify()` und `JSON.parse()`
- Trennung von Logik und Darstellung

## Verwendung

Einfach die `index.html` im Browser öffnen – kein Build-Schritt nötig.

## Lizenz

MIT
