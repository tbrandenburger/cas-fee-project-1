"use strict";
var App = {

    ViewController: {

        // View controller members
        locale: "de-DE",
        translations: {},
        notes: [],
        sort: "dueDate",
        showFinish: false,
        importances: ["1", "2", "3", "4", "5"],
        styles: [{name: "Apple", key: "style-1"}, {name: "Pear", key: "style-2"}, {name: "Banana", key: "style-3"}],
        style: "style-1",
        message: "",
        messageType: "",

        // APP Init Methods     --------------------------------------------------------
        // =============================================================================

        // Init all required settings for the app
        init: function () {

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
            this.initHandlebar();
            this.setStyle(this.style);



            // promises calls to handly asyncs calls
            return $.when(this.getLocale(this.locale)).done(function (json) {

                App.translations = json;

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
            var pattern = new RegExp(/^\d{1,2}([.\/-])\d{1,2}([.\/-])\d{4}\s*(?:\d{1,2}:\d{1,2}(?::\d{1,2})?)?$/);
            checkPassed = pattern.test(dateString);

            return checkPassed;

        },

        isoStringToUtcString: function (dateTimeString) {

            try{
                var dateStringParts = dateTimeString.split(" ");
                var dateString = dateStringParts[0];
                var timeString = dateStringParts[1];
                var dateStringParts = dateString.split(".");
                var timeStringParts = timeString.split(":");

                var year = Number(dateStringParts[2]);
                var month = Number(dateStringParts[1]) - 1;
                var day = Number(dateStringParts[0]);
                var hour = Number(timeStringParts[0]);
                var minutes = Number(timeStringParts[1]);
                var seconds = 0;

                var dateObject = new Date(year, month, day, hour, minutes, seconds);

                return dateObject.toUTCString();
            }
            catch(err){
                return dateTimeString;
            }



        },

        getNoteFromViewModel: function (noteId) {

            for (var i=0; i<App.ViewController.notes.length; i++){

                if (App.ViewController.notes[i].id == noteId){
                    return App.ViewController.notes[i];
                }
            }
            return {};
        },

        
        
        setImportance: function (element) {

            var importance = element.data( "importance" );
            var noteId = element.data( "noteid" );

            $('span[data-noteid="' + noteId + '"] .material-icons.importance').each(function () {

                var currentElement = $(this);
                currentElement.data("selectedimportance", importance);
            });


        },

        hoverImportance: function (element) {

            var importance = element.data( "importance" );
            var noteId = element.data( "noteid" );

            $('span[data-noteid="' + noteId + '"] .material-icons.importance').each(function (){

                var currentElement = $( this );

                if( currentElement.data( "importance" ) <= importance){
                    currentElement.addClass( "importance-selected" );
                    currentElement.html("star");
                }
                else {
                    currentElement.removeClass( "importance-selected" );

                    if (currentElement.data( "importance" ) > importance){
                        currentElement.html("star_border");
                    }
                }
            });


        },

        hoverImportanceClear: function (element, importance) {
            var noteId = element.data( "noteid" );

            $('span[data-noteid="' + noteId + '"] .material-icons.importance').each(function (){
                var currentElement = $( this );
                var importance = currentElement.data( "importance" );
                var selectedimportance = currentElement.data( "selectedimportance" );

                currentElement.removeClass( "importance-selected" );

                if (importance <= selectedimportance){
                    currentElement.html("star");
                }
                else{
                    currentElement.html("star_border");
                }
            });
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
            var confirmMsg = App.translations.msgDeleteNote + "\n" + this.getNoteFromViewModel(noteId).title;

            if (confirm(confirmMsg)){
                $.when(App.NoteServices.deleteNote(noteId)).done(function(notes){
                    console.log("delete");
                    App.ViewController.message = "Notiz gelöscht";
                    App.ViewController.messageType = "warn";
                    App.ViewController.showDashboard();
                });
            }


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
            App.NoteController.renderView();

        },


        // Handlebar / Template Compiling- ---------------------------------------------
        // =============================================================================

        initHandlebar: function(){

            Handlebars.registerHelper("dateFormatter", function (utcDateString){

                if (utcDateString && utcDateString.length){
                    var utcDateString = Handlebars.Utils.escapeExpression(utcDateString);

                    var utcDate = new Date(utcDateString);

                    var hours = utcDate.getHours();

                    if (isNaN(hours)){
                        return utcDateString;
                    }

                    var minutes = utcDate.getMinutes();
                    var day = utcDate.getDate();
                    var month = utcDate.getMonth() + 1;
                    month = (month.toString().length == 1) ? "0" + month : month;
                    var year = utcDate.getFullYear();

                    var returnDate = day + "." + month + "." + year + " " + hours + ":" + minutes;

                    return new Handlebars.SafeString(returnDate);
                }
                else {
                    return utcDateString;
                }


            });


            Handlebars.registerHelper("dateTimeLocalInputFormatter", function (utcDateString){

                if (utcDateString && utcDateString.length){
                    var utcDateString = Handlebars.Utils.escapeExpression(utcDateString);
                    var utcDate = new Date(utcDateString);

                    var isoDateString = utcDate.toISOString();

                    return new Handlebars.SafeString(isoDateString);
                }
                else{
                    return utcDateString;
                }



            });
            
            Handlebars.registerHelper('checkFinished', function(context, options) {
                if( context != "" ) {
                    return options.fn(this);
                }else {
                    return options.inverse(this);
                }
            });

            Handlebars.registerHelper('listNotes', function(context, options) {
                var ret = "";

                for(var i=0, j=context.length; i<j; i++) {

                    var finishDate = (context[i].finishDate === undefined) ? "" : context[i].finishDate;
                    
                    if((!App.ViewController.showFinish && finishDate.length == 0) || App.ViewController.showFinish) {
                        ret = ret + options.fn(context[i]);
                    }

                }

                return ret;
            });

            Handlebars.registerHelper("checkSortActive", function(data, options){

                if( App.ViewController.sort === data ) {
                    localStorage.setItem('noteSortOrder', data);

                    return options.fn(this);
                }else {
                    return options.inverse(this);
                }

            });

            Handlebars.registerHelper("showMessage", function(data){

                if( data.message.length) {
                    return true;
                }else {
                    return false;
                }

            });
    
            Handlebars.registerHelper("showImportance", function(data, id, editable, options){

                var returnString = "";
                var cssEditable = editable ? 'editable' : '';

                for(var i = 1; i <= App.ViewController.importances.length; i++){
                    if( i <= data ){
                        returnString += '<i class="material-icons importance ' + cssEditable + '" data-importance="' + i + '" data-selectedimportance="' + data + '" data-noteid="' + id + '">star</i>';
                    }else {
                        returnString += '<i class="material-icons importance ' + cssEditable + '" data-importance="' + i + '" data-selectedimportance="' + data + '" data-noteid="' + id + '">star_border</i>'
                    }
                }

                return new Handlebars.SafeString(returnString);
        
            });

            Handlebars.registerHelper("setSelectedRadio", function(value, selectedValue){

                var returnString = "";

                    if( value == selectedValue){
                        returnString += 'checked';
                    }

                return new Handlebars.SafeString(returnString);
            });

            Handlebars.registerHelper("setSelected", function(value, selectedValue){

                var returnString = "";

                if( value == selectedValue){
                    returnString += 'selected';
                }

                return new Handlebars.SafeString(returnString);
            });

        },

        // Generate the HTML Markup from a Handlebar template with the given data
        compileHandlebar: function (templateName, data) {

            // Add the list of possible importance values to the data object
            data.importances = App.ViewController.importances;
            data.styles = App.ViewController.styles;

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