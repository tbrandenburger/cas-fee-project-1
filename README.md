CAS FEE Projekt 1 - einfache Notiz Applikation

## 1. Technologien
- jQuery
- handlebar.js
- HTML
- CSS (Scss)
- JavaScript
- Node.js
- Gulp.js
- Jasmine

## 2. Installation
```
$ git clone https://github.com/tbrandenburger/cas-fee-project-1
$ cd cas-fee-project-1
$ npm install
$ npm start
```

## 3. API

| Route        | HTTP Verb           | Beschreibung  |
| ------------- |:-------------:| -----:|
| /api/notes     | GET | Alle Notizen auslesen |
| /api/notes      | POST      |   Neue Notiz erstellen |
| /api/notes/:note_id | GET      |    Bestimmte Notiz auslesen |
| /api/notes/:note_id | PUT      |    Eine Notiz mit neuen Daten aktualisieren |
| /api/notes/:note_id | DELETE      |    Eine Notiz löschen |
