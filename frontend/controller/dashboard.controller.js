"use strict";
$(document).ready(function(){
    App.DashboardController = {

        template: 'dashboard',

        init: function() {
            
            if (localStorage.getItem('noteShowFinish') !== null){
                App.ViewController.showFinish = localStorage.getItem('noteShowFinish');
            }

            this.getAllNotes();
        },

        getAllNotes: function () {
            var controller = this;

            $.when(App.NoteServices.getAllNotes()).done(function(notes){
                App.ViewController.notes = notes.notes;

                notes.notes.style = App.ViewController.style;

                if (App.ViewController.message.length){
                    notes.notes.message = App.ViewController.message;
                    notes.notes.messageType = App.ViewController.messageType;
                    App.ViewController.message = "";
                    App.ViewController.messageType = "";
                }
                controller.renderView(notes.notes);
            });
        },

        setNoteDone: function(noteId){
            var note = App.ViewController.getNoteFromViewModel(noteId);

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

        // Sort the notes by sort type
        sortNotes: function(sortType) {

            localStorage.setItem('noteSortOrder', sortType);

            var sortDuedate = function(a, b) {
                return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
            };

            var sortCreatedate = function(a, b) {
                return new Date(a.createDate).getTime() - new Date(b.createDate).getTime();
            };

            var sortImportance = function(a, b) {
                return a.importance - b.importance;
            };


            if(sortType == "dueDate") {
                App.ViewController.notes.sort(sortDuedate);
            }else if(sortType === "createDate") {
                App.ViewController.notes.sort(sortCreatedate);
            } else if(sortType === "importance") {
                App.ViewController.notes.sort(sortImportance);
            }


            App.ViewController.notes.reverse();
            App.ViewController.sort = sortType;

            this.renderView(App.ViewController.notes);

        },

        displayNotes: function(display) {

            if(display === "all") {
                App.ViewController.showFinish = true;
            }else if(display === "open") {
                App.ViewController.showFinish = false;
            }
            localStorage.setItem('noteShowFinish', App.ViewController.showFinish);


            this.renderView(App.ViewController.notes);
        },

        // Set the View
        setView: function() {

            // register eventhandlers for buttons
            App.DashboardController.registerEventHandler();

            if( App.ViewController.showFinish ) {
                $( "#dashboard-display-all" ).addClass('label-active');
                $( "#dashboard-display-open" ).removeClass('label-active');
            } else {
                $( "#dashboard-display-all" ).removeClass('label-active');
                $( "#dashboard-display-open" ).addClass('label-active');
            }
        },

        renderView: function (notes) {
            $.when(App.ViewController.compileHandlebar(this.template, notes)).done(function(compiledHtml){
                $("#main-container").html(compiledHtml);
                App.DashboardController.setView();
            });
        },

        registerEventHandler: function ()
        {
            $( "#dashboard-sort-duedate" ).on( "click", function() {
                App.DashboardController.sortNotes('dueDate');
            });

            $( "#dashboard-sort-createdate" ).on( "click", function() {
                App.DashboardController.sortNotes('createDate');
            });

            $( "#dashboard-sort-importance" ).on( "click", function() {
                App.DashboardController.sortNotes('importance');
            });

            $( "#dashboard-display-all" ).on( "click", function() {
                App.DashboardController.displayNotes('all');
            });

            $( "#dashboard-display-open" ).on( "click", function() {
                App.DashboardController.displayNotes('open');
            });

            $( "#style-switcher" ).on( "change", function() {
                App.ViewController.setStyle($(this).val());
            });

            $( ".label-delete" ).on( "click", function() {
                App.ViewController.deleteNote($(this).data( "note-id" ));
            });

            $( ".label-done" ).on( "click", function() {
                App.DashboardController.setNoteDone($(this).data( "note-id" ));
            });


            $("#message").show().delay(3000).fadeOut(1500);

        }
    }
});




