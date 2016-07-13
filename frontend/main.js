"use strict";
var App = {
    ViewController: {
        // View controller members
        locale: 'de-DE',
        translations: {},
        notes: [],
        sort: 'dueDateDesc',
        showFinish: false,
        importances: ['1', '2', '3', '4', '5'],
        styles: [{name: 'Light', key: 'style-1'}, {name: 'Dark', key: 'style-2'}],
        style: 'style-1',
        message: {
            text: '',
            type: ''
        },

        // APP Init Methods     --------------------------------------------------------
        // =============================================================================

        // Init all required settings for the app
        init: function () {
            var self = this;

            if (localStorage.getItem('noteSelectedStyle') !== null){
                this.style = localStorage.getItem('noteSelectedStyle');
            }
            if (localStorage.getItem('noteSortOrder') !== null){
                this.sort = localStorage.getItem('noteSortOrder');
            }
            if (localStorage.getItem('noteShowFinish') !== null){
                this.showFinish = localStorage.getItem('noteShowFinish');
            }

            //handlebar init - register handlebar helpers
            initHandlebars(this);
            // set default style
            this.setStyle(this.style);

            // promises calls to handly asyncs calls
            return $.when(this.getLocale(this.locale)).done(function (json) {
                self.translations = json;

                return true;
            });
        },

        setStyle: function (style) {
            localStorage.setItem('noteSelectedStyle', style);

            var styleLink = 'css/' + style + '.css';
            $('#stylesheet-include').attr('href', styleLink);
        },

        // Get the translation json file based on the active locale
        getLocale: function (locale) {

            return $.getJSON('/locale/' + locale + '.json', function (json) {
                return json;
            });
        },


        // View Handlings       --------------------------------------------------------
        // =============================================================================

        getNoteFromViewModel: function (noteId) {

            for (var i=0; i<this.notes.length; i++){

                if (this.notes[i].id == noteId){
                    return this.notes[i];
                }
            }
            return {};
        },

        // Show the page desired based on the action url parameter
        // This method is called after the application is initialized completely
        show: function () {

            if (this.getQueryVariable('action') === 'edit') {
                this.showNoteEdit(this.getQueryVariable('id'));
            }
            else if (this.getQueryVariable('action') === 'add') {
                this.showNoteAdd();
            }
            else {
                this.showDashboard();
            }
        },

        deleteNote: function (noteId) {
            var self = this;

            $.when(App.NoteServices.deleteNote(noteId)).done(function(notes){
                console.log('delete');
                self.setMessage('Notiz gelöscht', 'warn');
                self.showDashboard();
            });
        },

        setNoteDone: function(note){
            var self = this;

            var now = new Date();
            var nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

            note.finishDate = nowUtc;

            $.when(App.NoteServices.editNote(note)).done(function(res){
                self.setMessage('Notiz wurde als erledigt markiert', 'info');
                self.showDashboard();
            });
        },

        // Open the Dashboard and initialize it
        showDashboard: function () {
            App.DashboardController.init();
        },

        // Open the note edit form and initialize it
        showNoteEdit: function (id) {
            console.log('showNoteEdit');
            App.NoteController.mode = 'edit';
            App.NoteController.getNote(id);
        },
        
        // Open the note edit form and initialize it
        showNoteAdd: function () {
            console.log('showNoteAdd');
            App.NoteController.mode = 'add';

            var data = {
                note: {'id': 0},
                message: {
                    text: '',
                    type: ''
                }
            };

            App.NoteController.renderView(data);
        },

        setMessage: function(message, messageType) {
            this.message.text = message;
            this.message.type = messageType;
        },

        clearMessage: function() {
            this.message.text = '';
            this.message.type = '';
        },
        
        // Handlebar / Template Compiling- ---------------------------------------------
        // =============================================================================

        // Generate the HTML Markup from a Handlebar template with the given data
        compileHandlebar: function (templateName, data) {
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
        }
    },

    loadHelpers: function () {
        for (var helperFunction in Helpers) {
            App.ViewController[helperFunction] = Helpers[helperFunction];
        }
    },

    // Init method for the app
    init: function () {
        // Init the controller
        $.when(App.ViewController.init()).done(function (loaded) {
                // Show the view after init the app
                App.ViewController.show();
            }
        );
    }
};

// initialize the app
App.init();
App.loadHelpers();

