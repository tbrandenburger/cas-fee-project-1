// SERVER SETUP
// =============================================================================

// Required Packages
var express     = require('express');        // call express
var app         = express();   // define app as express
var api         = express();   // define api as express
var http        = require('http').Server(app);
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile'); //https://www.npmjs.com/package/jsonfile


// Init the app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure app to use bodyParser()
// enable to get data from Post
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

// Process variables
process.env.port = 3000;
process.env.jsonFilePath = 'data/notes.json';


// ROUTES FOR NOTE API --------------------------------------------------------
// =============================================================================
var router = express.Router();

// Middleware to use for all requests
router.use(function(req, res, next) {
    console.log('// request start');
    next();
});

// Test route to make sure everything is working
router.get('/', function(req, res) {
    res.json({ message: 'Notes API' });
});

// ROUTES /NOTES
router.route('/notes')

    // Create a new note
    .post(function(req, res) {

        console.log('// create new note');

        jsonfile.readFile(process.env.jsonFilePath, function(err, obj) {

            var notesObj = obj;
            var notes = notesObj.notes;
            var maxValue = 0;

            // get most max id
            for(var i=0;i<notes.length;i++){
                var obj = notes[i];

                for(var key in obj){
                    var attrName = key;
                    var attrValue = obj[key];
                    if( attrName === 'id' && attrValue > maxValue) {
                        maxValue = attrValue;
                    }
                }
            }

            newNodeId = Number(maxValue) + 1;

            var now = new Date();
            var nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

            var newNote =  {
                'id': newNodeId,
                'title': req.body.title,
                'description': req.body.description,
                'importance': Number(req.body.importance),
                'dueDate': req.body.dueDate,
                'createDate': nowUtc,
                'finishDate': ''
            };

            //add note to notes
            notesObj.notes.push(newNote);

            jsonfile.writeFile(process.env.jsonFilePath, notesObj, {spaces: 2}, function(err) {
                if(err != 'null'){
                    res.json({
                        message: 'Notiz erstellt: '  + newNodeId,
                        note: newNote });
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

    });

// ROUTES /NOTES/:NOTE_ID
router.route('/notes/:note_id')

    // Get note by id
    .get(function(req, res){

        jsonfile.readFile(process.env.jsonFilePath, function(err, obj) {
            var notes = obj.notes;
            var resultNote = {};

            for(var i=0;i<notes.length;i++){
                var obj = notes[i];

                for(var key in obj){
                    var attrName = key;
                    var attrValue = obj[key];

                    if( attrName === 'id' && attrValue === Number(req.params.note_id)) {
                        resultNote = obj;
                        break;
                    }
                }
            }

            res.json(resultNote);
        });
    })

    // Update note by id
    .put(function(req, res) {

        console.log('// update note: ' + req.params.note_id)

        jsonfile.readFile(process.env.jsonFilePath, function(err, obj) {
            var notesObj = obj;
            var notes = notesObj.notes;

            for(var i=0;i<notes.length;i++){
                var obj = notes[i];

                for(var key in obj){
                    var attrName = key;
                    var attrValue = obj[key];

                    if( attrName === 'id' && attrValue === Number(req.params.note_id)) {
                        var editNote =  {
                            'id': Number(req.params.note_id),
                            'title': req.body.title,
                            'description': req.body.description,
                            'importance': Number(req.body.importance),
                            'dueDate': req.body.dueDate,
                            'createDate': notes[i].createDate,
                            'finishDate': req.body.finishDate
                        };

                        notes[i] = editNote;
                        break;
                    }
                }
            }
            //add note to notes
            notesObj.notes = notes;

            jsonfile.writeFile(process.env.jsonFilePath, notesObj, {spaces: 2}, function(err) {
                if(err != 'null'){
                    res.json({
                        message: 'Notiz updated: '  + req.params.note_id,
                        note: editNote});
                }
                else {
                    console.log(err);
                    res.json({ message: err});
                }
            })
        })
    })

    // Delete note by id
    .delete(function(req, res) {

        console.log('// delete note: ' + req.params.note_id)

        jsonfile.readFile(process.env.jsonFilePath, function(err, obj) {
            var notesObj = obj;
            var notes = notesObj.notes;

            for(var i=0;i<notes.length;i++){
                var obj = notes[i];

                for(var key in obj){
                    var attrName = key;
                    var attrValue = obj[key];

                    if( attrName === 'id' && attrValue === Number(req.params.note_id)) {
                        notes.splice(i, 1);
                        break;
                    }

                }
            }

            //update notes
            notesObj.notes = notes;

            jsonfile.writeFile(process.env.jsonFilePath, notesObj, {spaces: 2}, function(err) {
                if(err != 'null'){
                    res.json({ message: 'Notiz deleted: '  + req.params.note_id });
                }
                else {
                    console.log(err);
                    res.json({ message: err});
                }
            })
        });
    })
;



// REGISTER THE ROUTES -------------------------------
// ===================================================

// all of the routes will be prefixed with /api
api.use('/api', router);

// Connect api with the app
app.use('/', api);

// Route / to frontend for static files
app.use('/', express.static(__dirname + '/frontend'));


// START THE SERVER ----------------------------------
// ===================================================
app.listen(process.env.port);
console.log('Go to http://localhost:' + process.env.port);