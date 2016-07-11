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
                controller.sortNotes(App.ViewController.sort);
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

            var sortDuedateAsc = function(a, b) {
                return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
            };

            var sortCreatedateAsc = function(a, b) {
                return new Date(a.createDate).getTime() - new Date(b.createDate).getTime();
            };

            var sortImportanceAsc = function(a, b) {
                return a.importance - b.importance;
            };

            var sortDuedateDesc = function(a, b) {
                return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
            };

            var sortCreatedateDesc = function(a, b) {
                return new Date(b.createDate).getTime() - new Date(a.createDate).getTime();
            };

            var sortImportanceDesc = function(a, b) {
                return b.importance - a.importance;
            };


            if(sortType == "dueDateDesc") {
                App.ViewController.notes.sort(sortDuedateDesc);
            }else if(sortType === "createDateDesc") {
                App.ViewController.notes.sort(sortCreatedateDesc);
            } else if(sortType === "importanceDesc") {
                App.ViewController.notes.sort(sortImportanceDesc);
            }else if(sortType === "dueDateAsc") {
                App.ViewController.notes.sort(sortDuedateAsc);
            } else if(sortType === "createDateAsc") {
                App.ViewController.notes.sort(sortCreatedateAsc);
            } else if(sortType === "importanceAsc") {
                App.ViewController.notes.sort(sortImportanceAsc);
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

        dismissDelete: function (noteId) {
            $(".delete-modal-layer-" + noteId).css("display", "none");
            $(".delete-modal-background").css("display", "none");
        },

        confirmDelete: function (noteId) {
            $(".delete-modal-layer-" + noteId).css("display", "inline-block");
            $(".delete-modal-background").css("display", "block");
        },

        deleteNote: function (noteId) {
            $(".delete-modal-layer-" + noteId).css("display", "none");
            $(".delete-modal-background").css("display", "none");

            App.ViewController.deleteNote(noteId);
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
            var controller = this;

            $( "#dashboard-sort-duedate" ).on( "click", function() {
                if(App.ViewController.sort === "dueDateDesc") {
                    App.DashboardController.sortNotes('dueDateAsc');
                }else if(App.ViewController.sort === "dueDateAsc"){
                    App.DashboardController.sortNotes('dueDateDesc');
                }else {
                    App.DashboardController.sortNotes('dueDateDesc');
                }

            });

            $( "#dashboard-sort-createdate" ).on( "click", function() {

                if(App.ViewController.sort === "createDateDesc") {
                    App.DashboardController.sortNotes('createDateAsc');
                }else if(App.ViewController.sort === "createDateAsc"){
                    App.DashboardController.sortNotes('createDateDesc');
                }else {
                    App.DashboardController.sortNotes('createDateDesc');
                }
            });

            $( "#dashboard-sort-importance" ).on( "click", function() {

                if(App.ViewController.sort === "importanceDesc") {
                    App.DashboardController.sortNotes('importanceAsc');
                }else if(App.ViewController.sort === "importanceAsc"){
                    App.DashboardController.sortNotes('importanceDesc');
                }else {
                    App.DashboardController.sortNotes('importanceDesc');
                }
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
                //App.ViewController.deleteNote($(this).data( "note-id" ));
                controller.confirmDelete($(this).data( "note-id" ));
            });

            $( ".confirmDelete" ).on( "click", function() {
                controller.deleteNote($(this).data( "note-id" ));
            });

            $( ".dismissDelete" ).on( "click", function() {
                controller.dismissDelete($(this).data( "note-id" ));
            });

            $( ".label-done" ).on( "click", function() {
                App.DashboardController.setNoteDone($(this).data( "note-id" ));
            });


            $("#message").show().delay(3000).fadeOut(1500);

        }
    }
});




