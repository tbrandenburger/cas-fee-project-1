"use strict";
$(document).ready(function(){
    App.NoteController = {

        template: 'note',
        mode: '',
        note: {},
        mandatoryFields: ['title'],

        getNote: function (id)
        {
            var controller = this;

             $.when(App.NoteServices.getNote(id)).done(function(note){
                 controller.note = note;
                 note.mode = App.NoteController.mode;
                 controller.renderView(note);
             });
        },

        editNote: function ()
        {
            var controller = this;
            var note = {};
            var importance = 0;

            importance = $('.material-icons.importance').data("selectedimportance");

            note = {
                id: this.note.id,
                title: $("#title").val(),
                description: $("#description").val(),
                importance: Number(importance),
                dueDate: $("#dueDate").val(),
                createDate: this.note.createDate,
                finishDate: ""
            };

            note.mode = App.NoteController.mode;

            if (this.checkMandatory(this.mandatoryFields).length){
                note.message = "Bitte füllen Sie sämtliche Pflichtfelder * aus";
                note.messageType = "warn";

                this.renderView(note);

                return false;
            }

            if ($("#dueDate").val().length && !App.ViewController.checkInputDateFormat($("#dueDate").val())){

                note.message = "Falsches Datumsformat";
                note.messageType = "warn";

                this.renderView(note);

                return false;
            }
            else{
                note.dueDate = App.ViewController.isoStringToUtcString($("#dueDate").val());
            }

            $.when(App.NoteServices.editNote(note)).done(function(res){
                App.ViewController.message = "Notiz bearbeitet";
                App.ViewController.messageType = "info";
                App.ViewController.showDashboard();
                /*controller.note = res.note;
                controller.renderView(controller.note);*/
            });

        },

        addNote: function (){
            var controller = this;
            var note = {};
            var importance = 1;

            importance = $('.material-icons.importance').data("selectedimportance");

            note = {
                id: "",
                title: $("#title").val(),
                description: $("#description").val(),
                importance: Number(importance),
                dueDate: $("#dueDate").val(),
                createDate: "",
                finishDate: ""
            };

            if (this.checkMandatory(this.mandatoryFields).length){
                note.message = "Bitte füllen Sie sämtliche Pflichtfelder * aus";
                note.messageType = "warn";

                this.renderView(note);

                return false;
            }

            if ($("#dueDate").val().length && !App.ViewController.checkInputDateFormat($("#dueDate").val())){

                note.message = "Falsches Datumsformat";
                note.messageType = "warn";

                this.renderView(note);

                return false;
            }
            else{
                note.dueDate = App.ViewController.isoStringToUtcString($("#dueDate").val());
            }

            $.when(App.NoteServices.addNote(note)).done(function(res){
                App.ViewController.message = "Notiz hinzugefügt";
                App.ViewController.messageType = "new";
                App.ViewController.showDashboard();
                /*controller.note = res.note;
                 controller.mode = 'edit';
                 controller.renderView(controller.note);*/
            });

        },

        checkMandatory: function (mandatoryFields) {
            var missingFields = [];

            for (var i = 0; i < mandatoryFields.length; i++){
                if ($("#" + mandatoryFields[i]).val().length == 0){
                    missingFields.push(mandatoryFields[i]);
                }
            }

            return missingFields;
        },

        setNoteDone: function(){
            var note = this.note;

            var now = new Date();
            var nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

            note.finishDate = nowUtc;

            $.when(App.NoteServices.editNote(note)).done(function(res){
                App.ViewController.message = "Notiz wurde als erledigt markiert";
                App.ViewController.messageType = "info";
                App.ViewController.showDashboard();
                /*controller.note = res.note;
                 controller.renderView(controller.note);*/
            });
        },

        renderView: function (note)
        {
            var data = note || {"id": 0};

            $.when(App.ViewController.compileHandlebar(this.template, data)).done(function (compiledHtml)
            {
                $("#main-container").html(compiledHtml);

                App.NoteController.registerEventHandler();
            });

        },

        registerEventHandler: function (){
            var controller = this;

            $( "#submit" ).on( "click", function () {

                if (controller.mode === 'edit'){
                    controller.editNote();
                }
                else{
                    controller.addNote();
                }
            });

            $( "#delete" ).on( "click", function() {
                App.ViewController.deleteNote($(this).data( "note-id" ));
            });

            $( "#setDone" ).on( "click", function() {
                App.NoteController.setNoteDone();
            });

            $(".material-icons.importance" ).hover(function() {
                App.ViewController.hoverImportance($(this));
            });

            $(".material-icons.importance" ).click(function() {
                App.ViewController.setImportance($(this));
            });

            $(".importance-container").mouseout(function() {
                App.ViewController.hoverImportanceClear($(this));
            });

        }



    };



});
