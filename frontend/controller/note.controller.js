"use strict";
$(document).ready(function(){
    App.NoteController = {

        template: 'note',

        getNote: function (id)
        {
            var controller = this;

             $.when(App.NoteServices.getNote(id)).done(function(note){
                controller.renderView(note);
             });
        },

        renderView: function (note)
        {
            var data = note || {};

            $.when(App.ViewController.compileHandlebar(this.template, data)).done(function (compiledHtml)
            {
                $("#main-container").append(compiledHtml);

            });

        },

        deleteNote: function ()
        {

        }

    }
});

