"use strict";
$(document).ready(function(){
    App.NoteController = {

        template: 'note',

        getNote: function (id)
        {
            var controller = this;


            controller.renderView({});
            /*
             $.when(NoteServices().getNote(id)).done(function(note){
             controller.renderView(note);
             });
             */
        },

        renderView: function (note)
        {
            $.when(App.ViewController.compileHandlebar(this.template, note)).done(function (compiledHtml)
            {
                $("#main-container").append(compiledHtml);

            });

        },

        deleteNote: function ()
        {

        }

    }
});

