"use strict";

define(['jquery', 'app', 'noteService'], function ($, App, noteService){


    return {

        template: 'dashboard',

        init: function() {
            
            if (localStorage.getItem('noteShowFinish') !== null){
                App.ViewController.showFinish = localStorage.getItem('noteShowFinish');
            }

            this.getAllNotes();
        },

        getAllNotes: function () {
            var self = this;

            $.when(noteService.getAllNotes()).done(function(res){
                App.ViewController.notes = res.notes;

                self.sortNotes(App.ViewController.sort);

                var data = {
                    notes: res.notes,
                    style: App.ViewController.style
                };

                if (App.ViewController.message.text){
                    data.message = {
                        text: App.ViewController.message.text,
                        type: App.ViewController.message.type
                    };
                }

                self.renderView(data);
            });
        },


        // Sort the notes by sort type
        sortNotes: function(sortType) {

            localStorage.setItem('noteSortOrder', sortType);

            var sortDuedateAsc = function(a, b) {
                var aDateArr = a.dueDate.split('.');
                var aDate = new Date(aDateArr[2], aDateArr[1], aDateArr[0]);
                var bDateArr = b.dueDate.split('.');
                var bDate = new Date(bDateArr[2], bDateArr[1], bDateArr[0]);
                return aDate.getTime() - bDate.getTime();
            };

            var sortCreatedateAsc = function(a, b) {
                return new Date(a.createDate).getTime() - new Date(b.createDate).getTime();
            };

            var sortImportanceAsc = function(a, b) {
                return a.importance - b.importance;
            };

            var sortDuedateDesc = function(a, b) {
                var aDateArr = a.dueDate.split('.');
                var aDate = new Date(aDateArr[2], aDateArr[1], aDateArr[0]);
                var bDateArr = b.dueDate.split('.');
                var bDate = new Date(bDateArr[2], bDateArr[1], bDateArr[0]);
                return bDate.getTime() - aDate.getTime();
            };

            var sortCreatedateDesc = function(a, b) {
                return new Date(b.createDate).getTime() - new Date(a.createDate).getTime();
            };

            var sortImportanceDesc = function(a, b) {
                return b.importance - a.importance;
            };


            if(sortType == 'dueDateDesc') {
                App.ViewController.notes.sort(sortDuedateDesc);
            }else if(sortType === 'createDateDesc') {
                App.ViewController.notes.sort(sortCreatedateDesc);
            } else if(sortType === 'importanceDesc') {
                App.ViewController.notes.sort(sortImportanceDesc);
            }else if(sortType === 'dueDateAsc') {
                App.ViewController.notes.sort(sortDuedateAsc);
            } else if(sortType === 'createDateAsc') {
                App.ViewController.notes.sort(sortCreatedateAsc);
            } else if(sortType === 'importanceAsc') {
                App.ViewController.notes.sort(sortImportanceAsc);
            }

            App.ViewController.notes.reverse();
            App.ViewController.sort = sortType;

            var data = {
                notes: App.ViewController.notes
            };

            this.renderView(data);

        },

        displayNotes: function(display) {

            if(display === 'all') {
                App.ViewController.showFinish = true;
            }else if(display === 'open') {
                App.ViewController.showFinish = false;
            }
            localStorage.setItem('noteShowFinish', App.ViewController.showFinish);

            var data = {notes: App.ViewController.notes};

            this.renderView(data);
        },

        dismissDelete: function (noteId) {
            $('.delete-modal-layer-' + noteId).css('display', 'none');
            $('.delete-modal-background').css('display', 'none');
        },

        confirmDelete: function (noteId) {
            $('.delete-modal-layer-' + noteId).css('display', 'inline-block');
            $('.delete-modal-background').css('display', 'block');
        },

        deleteNote: function (noteId) {
            $('.delete-modal-layer-' + noteId).css('display', 'none');
            $('.delete-modal-background').css('display', 'none');

            App.ViewController.deleteNote(noteId);
        },

        setNoteDone: function(noteId){
            var note = App.ViewController.getNoteFromViewModel(noteId);

            App.ViewController.setNoteDone(note);
        },

        // Set the View
        setView: function() {

            // register eventhandlers for buttons
            this.registerEventHandler();

            if( App.ViewController.showFinish ) {
                $('#dashboard-display-all').addClass('label-active');
                $('#dashboard-display-open').removeClass('label-active');
            } else {
                $('#dashboard-display-all').removeClass('label-active');
                $('#dashboard-display-open').addClass('label-active');
            }
        },



        renderView: function (data) {
            var self = this;
            $.when(App.ViewController.compileHandlebar(this.template, data)).done(function(compiledHtml){
                $('#main-container').html(compiledHtml);
                self.setView();
            });
        },

        registerEventHandler: function () {
            var self = this;

            $('#dashboard-sort-duedate').on('click', function() {
                if(App.ViewController.sort === 'dueDateDesc') {
                    self.sortNotes('dueDateAsc');
                }else if(App.ViewController.sort === 'dueDateAsc'){
                    self.sortNotes('dueDateDesc');
                }else {
                    self.sortNotes('dueDateDesc');
                }

            });

            $('#dashboard-sort-createdate').on('click', function() {

                if(App.ViewController.sort === 'createDateDesc') {
                    self.sortNotes('createDateAsc');
                }else if(App.ViewController.sort === 'createDateAsc'){
                    self.sortNotes('createDateDesc');
                }else {
                    self.sortNotes('createDateDesc');
                }
            });

            $('#dashboard-sort-importance').on('click', function() {

                if(App.ViewController.sort === 'importanceDesc') {
                    self.sortNotes('importanceAsc');
                }else if(App.ViewController.sort === 'importanceAsc'){
                    self.sortNotes('importanceDesc');
                }else {
                    self.sortNotes('importanceDesc');
                }
            });

            $('#dashboard-display-all').on('click', function() {
                self.displayNotes('all');
            });

            $('#dashboard-display-open').on('click', function() {
                self.displayNotes('open');
            });

            $('#style-switcher').on('change', function() {
                App.ViewController.setStyle($(this).val());
            });

            $('.label-delete').on('click', function() {
                //App.ViewController.deleteNote($(this).data( 'note-id' ));
                self.confirmDelete($(this).data('note-id'));
            });

            $('.confirmDelete').on('click', function() {
                self.deleteNote($(this).data('note-id'));
            });

            $('.dismissDelete').on('click', function() {
                self.dismissDelete($(this).data('note-id'));
            });

            $('.label-done').on('click', function() {
                self.setNoteDone($(this).data('note-id'));
            });

            $('#message').show().delay(3000).fadeOut(1500, 'swing', function() {
                App.ViewController.clearMessage();
            });
        }
    }
});




