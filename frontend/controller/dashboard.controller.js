"use strict";
var DashboardController = function (NoteServices) {
    var NoteServices = NoteServices;

    this.template = 'dashboard';

    this.init = function() {

        if (localStorage.getItem('noteShowFinish') !== null){
            app.showFinish = localStorage.getItem('noteShowFinish');
        }

        this.getAllNotes();
    };

    this.getAllNotes = function () {
        var self = this;

        $.when(NoteServices.getAllNotes()).done(function(res){
            app.notes = res.notes;

            self.sortNotes(app.sort);

            var data = {
                notes: res.notes,
                style: app.style
            };

            if (app.message.text){
                data.message = {
                    text: app.message.text,
                    type: app.message.type
                };
            }

            self.renderView(data);
        });
    };


    // Sort the notes by sort type
    this.sortNotes = function(sortType) {

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
            app.notes.sort(sortDuedateDesc);
        }else if(sortType === 'createDateDesc') {
            app.notes.sort(sortCreatedateDesc);
        } else if(sortType === 'importanceDesc') {
            app.notes.sort(sortImportanceDesc);
        }else if(sortType === 'dueDateAsc') {
            app.notes.sort(sortDuedateAsc);
        } else if(sortType === 'createDateAsc') {
            app.notes.sort(sortCreatedateAsc);
        } else if(sortType === 'importanceAsc') {
            app.notes.sort(sortImportanceAsc);
        }

        app.notes.reverse();
        app.sort = sortType;

        var data = {
            notes: app.notes
        };

        this.renderView(data);

    };

    this.displayNotes = function(display) {

        if(display === 'all') {
            app.showFinish = true;
        }else if(display === 'open') {
            app.showFinish = false;
        }
        localStorage.setItem('noteShowFinish', app.showFinish);

        var data = {notes: app.notes};

        this.renderView(data);
    };

    this.dismissDelete = function (noteId) {
        $('.delete-modal-layer-' + noteId).css('display', 'none');
        $('.delete-modal-background').css('display', 'none');
    };

    this.confirmDelete = function (noteId) {
        $('.delete-modal-layer-' + noteId).css('display', 'inline-block');
        $('.delete-modal-background').css('display', 'block');
    };

    this.deleteNote = function (noteId) {
        $('.delete-modal-layer-' + noteId).css('display', 'none');
        $('.delete-modal-background').css('display', 'none');

        app.deleteNote(noteId);
    };

    this.setNoteDone = function(noteId){
        var note = app.getNoteFromViewModel(noteId);

        app.setNoteDone(note);
    };

    // Set the View
    this.setView = function() {
        var self = this;
        // register eventhandlers for buttons
        self.registerEventHandler();

        if( app.showFinish ) {
            $('#dashboard-display-all').addClass('label-active');
            $('#dashboard-display-open').removeClass('label-active');
        } else {
            $('#dashboard-display-all').removeClass('label-active');
            $('#dashboard-display-open').addClass('label-active');
        }
    };



    this.renderView = function (data) {
        var self = this;
        $.when(app.compileHandlebar(this.template, data)).done(function(compiledHtml){
            $('#main-container').html(compiledHtml);
            self.setView();
        });
    };

    this.registerEventHandler = function () {
        var self = this;

        $('#dashboard-sort-duedate').on('click', function() {
            if(app.sort === 'dueDateDesc') {
                self.sortNotes('dueDateAsc');
            }else if(app.sort === 'dueDateAsc'){
                self.sortNotes('dueDateDesc');
            }else {
                self.sortNotes('dueDateDesc');
            }

        });

        $('#dashboard-sort-createdate').on('click', function() {

            if(app.sort === 'createDateDesc') {
                self.sortNotes('createDateAsc');
            }else if(app.sort === 'createDateAsc'){
                self.sortNotes('createDateDesc');
            }else {
                self.sortNotes('createDateDesc');
            }
        });

        $('#dashboard-sort-importance').on('click', function() {

            if(app.sort === 'importanceDesc') {
                self.sortNotes('importanceAsc');
            }else if(app.sort === 'importanceAsc'){
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
            app.setStyle($(this).val());
        });

        $('.label-delete').on('click', function() {
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
            app.clearMessage();
        });
    };
};




