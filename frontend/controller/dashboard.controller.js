"use strict";
$(document).ready(function(){
    App.DashboardController = {

        template: 'dashboard',

        init: function() {
            this.getAllNotes();
        },

        renderView: function (notes) {
            $.when(App.ViewController.compileHandlebar(this.template, notes)).done(function(compiledHtml){
                $("#main-container").append(compiledHtml);

            });

        },

        getAllNotes: function () {
            var controller = this;

            $.when(NoteServices().getAllNotes()).done(function(notes){
                controller.renderView(notes);
            });
        },

        deleteNote: function (noteId) {
            $.when(NoteServices().deleteNote(noteId)).done(function(notes){
                console.log("asdf");
            });
        }

    }

});




