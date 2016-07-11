"use strict";
function initHandlebars(viewController){
    
    var registerHelper = function (viewController) {

        var viewController = viewController;

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
                    returnString += '<i class="material-icons importance ' + cssEditable + '" data-importance="' + i + '" data-selectedimportance="' + data + '" data-note-id="' + id + '">star</i>';
                }else {
                    returnString += '<i class="material-icons importance ' + cssEditable + '" data-importance="' + i + '" data-selectedimportance="' + data + '" data-note-id="' + id + '">star_border</i>'
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

        Handlebars.registerHelper("getNoteDetailTitle", function(){
            var returnString = "";

            if (App.NoteController.mode == 'edit'){
                returnString = viewController.translations.editNoteTitle;
            }
            else{
                returnString = viewController.translations.createNoteTitle;
            }

            return new Handlebars.SafeString(returnString);
        });
    };
    registerHelper(viewController);
}

