"use strict";
var App = {


    ViewController: {

        // View controller members
        locale: "de-DE",
        translations: {sepp: "hans"},


        // APP Init Methods     --------------------------------------------------------
        // =============================================================================

        // Init all required settings for the app
        init: function () {


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

        // Show the page desired based on the action url parameter
        // This method is called after the application is initialized completely
        show: function () {

            if (this.getQueryVariable('action') === 'edit') {
                this.showNoteEdit();
            }
            else {
                this.showDashboard();
            }

        },


        // Open the Dashboard and initialize it
        showDashboard: function () {

            Dashboard.init();

        },

        // Open the note edit form and initialize it
        showNoteEdit: function () {

            console.log('showNoteEdit');

        },


        // Handlebar / Template Compiling- ---------------------------------------------
        // =============================================================================

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
            var htmlTemplate = compiledTemplate(templateData);

            return htmlTemplate;

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