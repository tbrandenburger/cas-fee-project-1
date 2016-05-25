"use strict";
$(document).ready(function(){
    App.DashboardController = {

        template: 'dashboard',

        init: function() {
            this.getAllNotes();
        },

        // Sort the notes by sort type
        sortNotes: function(sortType) {


            var sort_duedate = function(a, b) {
                return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
            }

            var sort_createdate = function(a, b) {
                return new Date(a.createDate).getTime() - new Date(b.createDate).getTime();
            }

            var sort_importance = function(a, b) {
                return a.importance - b.importance;
            }


            if(sortType == "dueDate") {
                App.ViewController.notes.sort(sort_duedate);
            }else if(sortType === "createDate") {
                App.ViewController.notes.sort(sort_createdate);
            } else if(sortType === "importance") {
                App.ViewController.notes.sort(sort_importance);
            }

            App.ViewController.notes.reverse();

            this.renderView(App.ViewController.notes);

        },

        renderView: function (notes) {
            $.when(App.ViewController.compileHandlebar(this.template, notes)).done(function(compiledHtml){
                $("#main-container").html(compiledHtml);

            });
        },

        getAllNotes: function () {
            var controller = this;

            $.when(App.NoteServices.getAllNotes()).done(function(notes){
                App.ViewController.notes = notes.notes;
                controller.renderView(App.ViewController.notes);
            });
        },

        deleteNote: function (noteId) {
            $.when(App.NoteServices.deleteNote(noteId)).done(function(notes){
                console.log("delete");
            });
        }

    }

});




