"use strict";
var App = {


   ViewController:  {

        locale: "de-DE",
        translations: {sepp: "hans"},
        init: function () {
            // load all required stuff
            return $.when(this.getLocale(this.locale)).done(function(json){

                App.translations = json;

                return true;
            });
        },

        show: function () {
            if (this.getQueryVariable('action') === 'edit'){
                this.showNoteEdit();
            }
            else {
                this.showDashboard();
            }
        },

        getLocale: function (locale) {
            return $.getJSON('/locale/' + locale + '.json', function(json){
                return json;
            });
        },

        showDashboard: function () {

            Dashboard().init();

        },

        showNoteEdit: function () {
            console.log('showNoteEdit');
        },

        compileHandlebar: function (templateName, data) {


             Handlebars.getTemplate = function (templateName, data) {
                if (Handlebars.templates === undefined || Handlebars.templates[templateName] === undefined) {
                    $.ajax({
                        url : '/template/' + templateName + '.hbs',
                        success : function(handlebarTemplate) {
                            if (Handlebars.templates === undefined) {
                                Handlebars.templates = {};
                            }
                            Handlebars.templates[name] = Handlebars.compile(handlebarTemplate);
                        },
                        async : false
                    });
                }

                 return Handlebars.templates[name];
            };

            var compiledTemplate = Handlebars.getTemplate(templateName, data);

            var templateData = {
                data: data,
                translations: App.translations
            };

            console.log(templateData);

            var htmlTemplate = compiledTemplate(templateData);

            return htmlTemplate;

        },

        getQueryVariable: function (variable) {
            var query = window.location.search.substring(1);
            var vars = query.split('&');
            for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split('=');
                if (pair[0] == variable) {
                    return pair[1];
                }
            }
        }

    },

    init: function (){
        // init the controller
        $.when(App.ViewController.init()).done(function (loaded){
                App.ViewController.show();
            }
        );
    }
};

App.init();