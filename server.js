// SERVER SETUP
// =============================================================================

// needed packages
var express    = require('express');        // call express
var app        = express();   // define app as express
var api        = express();   // define api as express
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile'); //https://www.npmjs.com/package/jsonfile


//init the app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure app to use bodyParser()
// this will let us get the data from a POST
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

//process variables
process.env.port = 3000;
process.env.jsonFilePath = 'notes.json';




// ROUTES FOR NOTE API --------------------------------------------------------
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('// request start');
    next();
});

// test route to make sure everything is working
router.get('/', function(req, res) {
    res.json({ message: 'Notes API' });
});

// ROUTES /NOTES
router.route('/notes')

    // Create a new note
    .post(function(req, res) {

        console.log("// create new note")

        jsonfile.readFile(process.env.jsonFilePath, function(err, obj) {

            var notes = obj;
            var maxValue = 0;

            for (key in notes)
            {
                if (key > maxValue)
                {
                    maxValue = key;
                }
            }

            newNodeId = Number(maxValue) + 1;

            var newNote =  {
                "title": req.body.title,
                "description": req.body.description,
                "importance": req.body.importance,
                "due_date": req.body.due_date
            }

            //add note to notes
            notes[newNodeId] = newNote;

            console.log(notes);

            jsonfile.writeFile(process.env.jsonFilePath, notes, {spaces: 2}, function(err) {
                if( err != "null" ){
                    res.json({ message: 'Notiz erstellt: '  + newNodeId });
                }
                else {
                    console.log(err);
                    res.json({ message: err});
                }

            })

        })

    })

    // Get all notes
    .get(function(req, res) {

        jsonfile.readFile(process.env.jsonFilePath, function(err, obj) {
            res.json(obj);
        })

    })

// ROUTES /NOTES/:NOTE_ID
router.route('/notes/:note_id')

    //get note by id
    .get(function(req, res){

        console.log("// get note: " + req.params.note_id)
        jsonfile.readFile(process.env.jsonFilePath, function(err, obj) {
            var notes = obj;
            res.json(notes[req.params.note_id]);
        });

    })

    //update note by id
    .put(function(req, res) {

        console.log("// update note: " + req.params.note_id)

        jsonfile.readFile(process.env.jsonFilePath, function(err, obj) {

            var notes = obj;

            var editNote =  {
                "title": req.body.title,
                "description": req.body.description,
                "importance": req.body.importance,
                "due_date": req.body.due_date
            }

            //add note to notes
            notes[req.params.note_id] = editNote;

            jsonfile.writeFile(process.env.jsonFilePath, notes, {spaces: 2}, function(err) {
                if( err != "null" ){
                    res.json({ message: 'Notiz updated: '  + req.params.note_id });
                }
                else {
                    console.log(err);
                    res.json({ message: err});
                }

            })

        })

    })

    //delete note by id
    .delete(function(req, res) {

        console.log("// delete note: " + req.params.note_id)

        jsonfile.readFile(process.env.jsonFilePath, function(err, obj) {
            var notes = obj;

            //delete note
            delete notes[req.params.note_id];

            jsonfile.writeFile(process.env.jsonFilePath, notes, {spaces: 2}, function(err) {
                if( err != "null" ){
                    res.json({ message: 'Notiz deleted: '  + req.params.note_id });
                }
                else {
                    console.log(err);
                    res.json({ message: err});
                }

            })

        });

    });



// REGISTER THE ROUTES -------------------------------
// ===================================================

// all of the routes will be prefixed with /api
api.use('/api', router);

//connect api with the app
app.use('/', api);

//route / to frondend for static files
app.use('/', express.static(__dirname + '/frontend'));



// START THE SERVER ----------------------------------
// ===================================================
app.listen(process.env.port);
console.log('Magic happens on port ' + process.env.port);