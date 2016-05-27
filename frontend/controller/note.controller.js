"use strict";
$(document).ready(function(){
    App.NoteController = {

        template: 'note',
        note: {},

        getNote: function (id)
        {
            var controller = this;

             $.when(App.NoteServices.getNote(id)).done(function(note){
                 controller.note = note;
                 controller.renderView(note);
             });
        },

        editNote: function ()
        {
            var controller = this;

            var note = {
                id: this.note.id,
                title: $("#title").val(),
                description: $("#description").val(),
                importance: $("input[name=importance]:checked").val(),
                dueDate: App.ViewController.isoStringToUtcString($("#dueDate").val()),
                createDate: this.note.createDate,
                finishDate: this.note.finishDate
            };

            $.when(App.NoteServices.editNote(note)).done(function(note){
                controller.note = note;
                controller.renderView(note);
            });

        },

        renderView: function (note)
        {
            var data = note || {};

            $.when(App.ViewController.compileHandlebar(this.template, data)).done(function (compiledHtml)
            {
                $("#main-container").html(compiledHtml);

                App.NoteController.registerEventHandler();
            });

        },

        registerEventHandler: function ()
        {
            var controller = this;

            $( "#submit" ).on( "click", function() {


                if (App.ViewController.checkInputDateFormat($("#dueDate").val())){

                    controller.editNote();
                }
                else{
                    console.log("incorrect date");
                }

            });

        },

        deleteNote: function ()
        {

        }

    };



});

