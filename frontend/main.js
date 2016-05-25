"use strict";
var App = {

    ViewController: {

        // View controller members
        locale: "de-DE",
        translations: {},
        notes: {},
        sort: "dueDate",
        showFinish: false,


        // APP Init Methods     --------------------------------------------------------
        // =============================================================================

        // Init all required settings for the app
        init: function () {

            //handlebar init - register handlebar helpers
            this.initHandlebar();

            // promises calls to handly asyncs calls
            return $.when(this.getLocale(this.locale)).done(function (json) {

                App.translations = json;

                return true;
            });


        },

        // Get the translation json file based on the active locale
        getLocale: function (locale) {

            return $.getJSON('/locale/' + locale + '.json', function (json) {
                return json;
            });

        },


        // View Handlings       --------------------------------------------------------
        // =============================================================================

        // Get a specific url parameter
        getQueryVariable: function (variable) {

            var query = window.location.search.substring(1);
            var vars = query.split('&');

            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (pair[0] == variable) {
                    return pair[1];
                }
            }

        },

        checkInputDateFormat: function (dateString) {

            var checkPassed = false;

            var pattern = new RegExp(/^\d{2}([./-])\d{2}\1\d{4} \d{2}([:])\d{2}$/);
            checkPassed = pattern.test(dateString);

            return checkPassed;

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


        // Open the Dashboard and initialize it
        showDashboard: function () {

            App.DashboardController.init();

        },

        // Open the note edit form and initialize it
        showNoteEdit: function (id) {

            console.log('showNoteEdit');
            App.NoteController.getNote(id);

        },

        // Open the note edit form and initialize it
        showNoteAdd: function () {

            console.log('showNoteAdd');
            App.NoteController.renderView();

        },


        // Handlebar / Template Compiling- ---------------------------------------------
        // =============================================================================

        initHandlebar: function(){

            Handlebars.registerHelper("dateFormatter", function (utcDateString){

                var utcDateString = Handlebars.Utils.escapeExpression(utcDateString);

                var utcDate = new Date(utcDateString);

                var hours = utcDate.getHours();
                var minutes = utcDate.getMinutes();
                var day = utcDate.getDate();
                var month = utcDate.getMonth() + 1;
                month = (month.toString().length == 1) ? "0" + month : month;
                var year = utcDate.getFullYear();

                var returnDate = day + "." + month + "." + year + " " + hours + ":" + minutes;

                return new Handlebars.SafeString(returnDate);

            });


            Handlebars.registerHelper("dateTimeLocalInputFormatter", function (utcDateString){

                var utcDateString = Handlebars.Utils.escapeExpression(utcDateString);
                var utcDate = new Date(utcDateString);

                var isoDateString = utcDate.toISOString();

                return new Handlebars.SafeString(isoDateString);

            });


            Handlebars.registerHelper('listNotes', function(context, options) {
                var ret = "";

                for(var i=0, j=context.length; i<j; i++) {

                    var finishDate = context[i].finishDate;

                    if((!App.ViewController.showFinish && finishDate.length == 0) || App.ViewController.showFinish) {
                        ret = ret + options.fn(context[i]);
                    }
                }

                return ret;
            });


        },

        // Generate the HTML Markup from a Handlebar template with the given data
        compileHandlebar: function (templateName, data) {

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
                translations: App.translations
            };



            // Get the html code of the template
            var renderedTemplate = compiledTemplate(templateData);

            return renderedTemplate;

        },

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