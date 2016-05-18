"use strict";

var Dashboard = {

    DashboardController:  {

        template: 'dashboard',

        init: function() {
            this.getAllNotes();
        },

        getAllNotes: function() {
            var controller = this;

            $.when(NoteServices().getAllNotes()).done(function(notes){
                controller.renderView(notes);
            });

        },

        renderView: function (notes) {
            $.when(App.ViewController.compileHandlebar(this.template, notes)).done(function(compiledHtml){
                $("#main-container").append(compiledHtml);

            });

        },

        deleteNote: function () {

        }

    },

    init: function(){

        // init the controller
        Dashboard.DashboardController.init();

    }
};



