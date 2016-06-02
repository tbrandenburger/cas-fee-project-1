"use strict";
$(document).ready(function(){
    App.NoteController = {

        template: 'note',
        mode: '',
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
                importance: Number($("input[name=importance]:checked").val()),
                dueDate: App.ViewController.isoStringToUtcString($("#dueDate").val()),
                createDate: this.note.createDate,
                finishDate: this.note.finishDate
            };

            $.when(App.NoteServices.editNote(note)).done(function(res){
                controller.note = res.note;
                controller.renderView(controller.note);
            });

        },

        addNote: function ()
        {
            var controller = this;

            var note = {
                id: "",
                title: $("#title").val(),
                description: $("#description").val(),
                importance: Number($("input[name=importance]:checked").val()),
                dueDate: App.ViewController.isoStringToUtcString($("#dueDate").val()),
                createDate: "",
                finishDate: ""
            };

            $.when(App.NoteServices.addNote(note)).done(function(res){
                controller.note = res.note;
                controller.mode = 'edit';
                controller.renderView(controller.note);
            });

        },

        deleteNote: function ()
        {

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

            $( "#submit" ).on( "click", function () {


                if ($("#dueDate").val().length == 0 || App.ViewController.checkInputDateFormat($("#dueDate").val())){

                    if (controller.mode === 'edit'){
                        controller.editNote();
                    }
                    else{
                        controller.addNote();
                    }

                }
                else{
                    console.log("incorrect date");
                }

            });

        }



    };



});

