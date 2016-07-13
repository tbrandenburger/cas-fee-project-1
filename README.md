#CAS FEE Project 1 - A simple note application
by Noel Bellón & Thomas Brandenburger

## 1. Project Description
According to the specification of the project the following points are covered:
- No framework such as bootstrap used
- It is not a single page application
- Responsive layout
- REST API

**Features:**
- List all notes on dashboard
- Sorting notes
- Filtering notes (todo/done)
- Create / edit note
- Saving notes on server side (nodejs)
- Changing appearance between two styles
- No global variables
- No javascript in html
- Client settings are stored in local storage

## 2. Technologies
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
Go to [http://localhost:3000](http://localhost:3000) in your browser

## 4. API

| Route        | HTTP Verb           | Description  |
| ------------- |:-------------:| -----:|
| /api/notes     | GET | Get all notes |
| /api/notes      | POST      |   Create a new note |
| /api/notes/:note_id | GET      |    Get a note by id |
| /api/notes/:note_id | PUT      |    Update a note |
| /api/notes/:note_id | DELETE      |    Delete a note |


