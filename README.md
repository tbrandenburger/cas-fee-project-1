#CAS FEE Projekt 1 - A simple Note Applikation
by Noel Bellón & Thomas Brandenburger

## 1. Project Description
According to the specification of the project the following points are covered:
- No framework such as bootstrap used
- It is not a single page application

- **Features:**
- list all notes on dashboard
- sorting notes
- filtering notes (todo/done)
- create / edit note
- saving notes on server side (nodejs)
- changing appearance between two styles
- no global variables
- no javascript in html

## 2. Technologien
- jQuery
- handlebar.js
- HTML
- CSS
- JavaScript
- Node.js

## 3. Installation
```
$ git clone https://github.com/tbrandenburger/cas-fee-project-1
$ cd cas-fee-project-1
$ npm install
$ npm start
```
Go to http://localhost:3000 in your browser

## 4. API

| Route        | HTTP Verb           | Description  |
| ------------- |:-------------:| -----:|
| /api/notes     | GET | Get all notes |
| /api/notes      | POST      |   Create a new note |
| /api/notes/:note_id | GET      |    Get a note by id |
| /api/notes/:note_id | PUT      |    Update a note |
| /api/notes/:note_id | DELETE      |    Delete a note |


