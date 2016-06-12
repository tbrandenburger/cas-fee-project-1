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

        renderView: function (notes) {
            $.when(App.ViewController.compileHandlebar(this.template, notes)).done(function(compiledHtml){
                $("#main-container").html(compiledHtml);
                App.DashboardController.setView();
            });
        },

        // Set the View
        setView: function() {

            // register eventhandlers for buttons
            App.DashboardController.registerEventHandler();



            if( App.ViewController.showFinish ) {
                $( "#dashboard-finished" ).addClass('active');
            } else {
                $( "#dashboard-finished" ).removeClass('active');
            }

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
            }

            var sortCreatedate = function(a, b) {
                return new Date(a.createDate).getTime() - new Date(b.createDate).getTime();
            }

            var sortImportance = function(a, b) {
                return a.importance - b.importance;
            }


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



        // Sort the notes by sort type
        toggleFinished: function(){
            App.ViewController.showFinish = !App.ViewController.showFinish;
            localStorage.setItem('noteShowFinish', App.ViewController.showFinish);

            this.renderView(App.ViewController.notes);
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

            $( "#dashboard-finished" ).on( "click", function() {
                App.DashboardController.toggleFinished();
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

            /*$(".material-icons.importance" ).hover(function() {
                App.ViewController.hoverImportance($(this));
            });

            $(".importance-container").mouseout(function() {
                App.ViewController.hoverImportanceClear($(this));
            });*/

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
        }

        

    }

});




