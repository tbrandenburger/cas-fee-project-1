"use strict";

require(['jquery', 'viewController', 'noteService'], function ($, viewController, noteService){


/*$(document).ready(function(){*/
    return {

        template: 'dashboard',

        init: function() {
            
            if (localStorage.getItem('noteShowFinish') !== null){
                viewController.showFinish = localStorage.getItem('noteShowFinish');
            }

            this.getAllNotes();
        },

        getAllNotes: function () {
            var self = this;

            $.when(noteService.getAllNotes()).done(function(res){
                viewController.notes = res.notes;

                self.sortNotes(viewController.sort);

                var data = {
                    notes: res.notes,
                    style: viewController.style
                };

                if (viewController.message.text){
                    data.message = {
                        text: viewController.message.text,
                        type: viewController.message.type
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
                viewController.notes.sort(sortDuedateDesc);
            }else if(sortType === 'createDateDesc') {
                viewController.notes.sort(sortCreatedateDesc);
            } else if(sortType === 'importanceDesc') {
                viewController.notes.sort(sortImportanceDesc);
            }else if(sortType === 'dueDateAsc') {
                viewController.notes.sort(sortDuedateAsc);
            } else if(sortType === 'createDateAsc') {
                viewController.notes.sort(sortCreatedateAsc);
            } else if(sortType === 'importanceAsc') {
                viewController.notes.sort(sortImportanceAsc);
            }

            viewController.notes.reverse();
            viewController.sort = sortType;

            var data = {
                notes: viewController.notes
            };

            this.renderView(data);

        },

        displayNotes: function(display) {

            if(display === 'all') {
                viewController.showFinish = true;
            }else if(display === 'open') {
                viewController.showFinish = false;
            }
            localStorage.setItem('noteShowFinish', viewController.showFinish);

            var data = {notes: viewController.notes};

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

            viewController.deleteNote(noteId);
        },

        setNoteDone: function(noteId){
            var note = viewController.getNoteFromViewModel(noteId);

            viewController.setNoteDone(note);
        },

        // Set the View
        setView: function() {

            // register eventhandlers for buttons
            this.registerEventHandler();

            if( viewController.showFinish ) {
                $('#dashboard-display-all').addClass('label-active');
                $('#dashboard-display-open').removeClass('label-active');
            } else {
                $('#dashboard-display-all').removeClass('label-active');
                $('#dashboard-display-open').addClass('label-active');
            }
        },



        renderView: function (data) {
            var self = this;
            $.when(viewController.compileHandlebar(this.template, data)).done(function(compiledHtml){
                $('#main-container').html(compiledHtml);
                self.setView();
            });
        },

        registerEventHandler: function () {
            var self = this;

            $('#dashboard-sort-duedate').on('click', function() {
                if(viewController.sort === 'dueDateDesc') {
                    self.sortNotes('dueDateAsc');
                }else if(viewController.sort === 'dueDateAsc'){
                    self.sortNotes('dueDateDesc');
                }else {
                    self.sortNotes('dueDateDesc');
                }

            });

            $('#dashboard-sort-createdate').on('click', function() {

                if(viewController.sort === 'createDateDesc') {
                    self.sortNotes('createDateAsc');
                }else if(viewController.sort === 'createDateAsc'){
                    self.sortNotes('createDateDesc');
                }else {
                    self.sortNotes('createDateDesc');
                }
            });

            $('#dashboard-sort-importance').on('click', function() {

                if(viewController.sort === 'importanceDesc') {
                    self.sortNotes('importanceAsc');
                }else if(viewController.sort === 'importanceAsc'){
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
                viewController.setStyle($(this).val());
            });

            $('.label-delete').on('click', function() {
                //viewController.deleteNote($(this).data( 'note-id' ));
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
                viewController.clearMessage();
            });
        }
    }
});




