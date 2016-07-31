"use strict";
var App = function () {

    // View controller members
    this.locale = 'de-DE';
    this.translations = {};
    this.notes = [];
    this.sort = 'dueDateDesc';
    this.showFinish = false;
    this.importances = ['1', '2', '3', '4', '5'];
    this.styles = [{name: 'Light', key: 'style-1'}, {name: 'Dark', key: 'style-2'}];
    this.style = 'style-1';
    this.message = {
        text: '',
        type: ''
    };

    // APP Init Methods     --------------------------------------------------------
    // =============================================================================

    // Init all required settings for the app
    this.init = function () {
        var self = this;

        this.NoteServices = new NoteServices('http://localhost:3000/api');
        this.NoteController = new NoteController(this.NoteServices);
        this.DashboardController = new DashboardController(this.NoteServices);
        this.loadHelpers();
        registerHandlebarsHelpers(this);

        if (localStorage.getItem('noteSelectedStyle') !== null){
            this.style = localStorage.getItem('noteSelectedStyle');
        }
        if (localStorage.getItem('noteSortOrder') !== null){
            this.sort = localStorage.getItem('noteSortOrder');
        }
        if (localStorage.getItem('noteShowFinish') !== null){
            this.showFinish = localStorage.getItem('noteShowFinish');
        }

        // set default style
        this.setStyle(this.style);

        // promises calls to handly asyncs calls
        return $.when(this.getLocale(this.locale)).done(function (json) {
            self.translations = json;
            self.show();

            //return true;
        });
    };

    this.setStyle = function (style) {
        localStorage.setItem('noteSelectedStyle', style);

        var styleLink = 'css/' + style + '.css';
        $('#stylesheet-include').attr('href', styleLink);
    };

    // Get the translation json file based on the active locale
    this.getLocale = function (locale) {

        return $.getJSON('/locale/' + locale + '.json', function (json) {
            return json;
        });
    };


    // View Handlings       --------------------------------------------------------
    // =============================================================================

    this.getNoteFromViewModel = function (noteId) {

        for (var i=0; i<this.notes.length; i++){

            if (this.notes[i].id == noteId){
                return this.notes[i];
            }
        }
        return {};
    };

    // Show the page desired based on the action url parameter
    // This method is called after the application is initialized completely
    this.show = function () {

        if (this.getQueryVariable('action') === 'edit') {
            this.showNoteEdit(this.getQueryVariable('id'));
        }
        else if (this.getQueryVariable('action') === 'add') {
            this.showNoteAdd();
        }
        else {
            this.showDashboard();
        }
    };

    this.deleteNote = function (noteId) {
        var self = this;

        $.when(this.NoteServices.deleteNote(noteId)).done(function(notes){
            console.log('delete');
            self.setMessage('Notiz gelöscht', 'warn');
            self.showDashboard();
        });
    };

    this.setNoteDone = function(note){
        var self = this;

        var now = new Date();
        var nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

        note.finishDate = nowUtc;

        $.when(this.NoteServices.editNote(note)).done(function(res){
            self.setMessage('Notiz wurde als erledigt markiert', 'info');
            self.showDashboard();
        });
    };

    // Open the Dashboard and initialize it
    this.showDashboard = function () {
        this.DashboardController.init();
    };

    // Open the note edit form and initialize it
    this.showNoteEdit = function (id) {
        console.log('showNoteEdit');
        this.NoteController.mode = 'edit';
        this.NoteController.getNote(id);
    };

    // Open the note edit form and initialize it
    this.showNoteAdd = function () {
        console.log('showNoteAdd');
        this.NoteController.mode = 'add';

        var data = {
            note: {'id': 0},
            message: {
                text: '',
                type: ''
            }
        };

        this.NoteController.renderView(data);
    };

    this.setMessage = function(message, messageType) {
        this.message.text = message;
        this.message.type = messageType;
    };

    this.clearMessage = function() {
        this.message.text = '';
        this.message.type = '';
    };

    // Handlebar / Template Compiling- ---------------------------------------------
    // =============================================================================

    // Generate the HTML Markup from a Handlebar template with the given data
    this.compileHandlebar = function (templateName, data) {
        // Add the list of possible importance values to the data object
        data.importances = this.importances;
        data.styles = this.styles;

        // Attached Handlebar function, that returns the compiled version of a specific handlebar template
        Handlebars.getTemplate = function (templateName, data) {
            if (Handlebars.templates === undefined || Handlebars.templates[templateName] === undefined) {
                $.ajax({
                    url: '/template/' + templateName + '.hbs',
                    success: function (handlebarTemplate) {
                        if (Handlebars.templates === undefined) {
                            Handlebars.templates = {};
                        }
                        Handlebars.templates[name] = Handlebars.compile(handlebarTemplate);
                    },
                    async: false
                });
            }

            return Handlebars.templates[name];
        };
        // Call the previously attached Handlebar method
        var compiledTemplate = Handlebars.getTemplate(templateName, data);

        // Create the template data based on the input data + translations
        var templateData = {
            data: data,
            translations: this.translations
        };
        // Get the html code of the template
        var renderedTemplate = compiledTemplate(templateData);

        return renderedTemplate;
    };

    this.loadHelpers = function () {
        for (var helperFunction in Helpers) {
            this[helperFunction] = Helpers[helperFunction];
        }
    };

};

// initialize the app
var app = new App();
app.init();

