"use strict";
var DashboardController = function (NoteServices) {
    var NoteServices = NoteServices;

    var self = this;

    this.template = 'dashboard';

    this.init = function() {

        if (localStorage.getItem('noteShowFinish') !== null){
            app.showFinish = localStorage.getItem('noteShowFinish');
        }

        _getAllNotes();
    };

    var _getAllNotes = function () {

        $.when(NoteServices.getAllNotes()).done(function(res){
            app.notes = res.notes;

            _sortNotes(app.sort);

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

            _renderView(data);
        });
    };


    // Sort the notes by sort type
    var _sortNotes = function(sortType) {

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

        _renderView(data);

    };

    var _displayNotes = function(display) {

        if(display === 'all') {
            app.showFinish = true;
        }else if(display === 'open') {
            app.showFinish = false;
        }
        localStorage.setItem('noteShowFinish', app.showFinish);

        var data = {notes: app.notes};

        _renderView(data);
    };

    var _dismissDelete = function (noteId) {
        $('.delete-modal-layer-' + noteId).css('display', 'none');
        $('.delete-modal-background').css('display', 'none');
    };

    var _confirmDelete = function (noteId) {
        $('.delete-modal-layer-' + noteId).css('display', 'inline-block');
        $('.delete-modal-background').css('display', 'block');
    };

    var _deleteNote = function (noteId) {
        $('.delete-modal-layer-' + noteId).css('display', 'none');
        $('.delete-modal-background').css('display', 'none');

        app.deleteNote(noteId);
    };

    var _setNoteDone = function(noteId){
        var note = app.getNoteFromViewModel(noteId);

        app.setNoteDone(note);
    };

    // Set the View
    var _setView = function() {
        // register eventhandlers for buttons
        _registerEventHandler();

        if( app.showFinish ) {
            $('#dashboard-display-all').addClass('label-active');
            $('#dashboard-display-open').removeClass('label-active');
        } else {
            $('#dashboard-display-all').removeClass('label-active');
            $('#dashboard-display-open').addClass('label-active');
        }
    };

    var _renderView = function (data) {
        $.when(app.compileHandlebar(self.template, data)).done(function(compiledHtml){
            $('#main-container').html(compiledHtml);
            _setView();
        });
    };

    var _registerEventHandler = function () {

        $('#dashboard-sort-duedate').on('click', function() {
            if(app.sort === 'dueDateDesc') {
                _sortNotes('dueDateAsc');
            }else if(app.sort === 'dueDateAsc'){
                _sortNotes('dueDateDesc');
            }else {
                _sortNotes('dueDateDesc');
            }

        });

        $('#dashboard-sort-createdate').on('click', function() {

            if(app.sort === 'createDateDesc') {
                _sortNotes('createDateAsc');
            }else if(app.sort === 'createDateAsc'){
                _sortNotes('createDateDesc');
            }else {
                _sortNotes('createDateDesc');
            }
        });

        $('#dashboard-sort-importance').on('click', function() {

            if(app.sort === 'importanceDesc') {
                _sortNotes('importanceAsc');
            }else if(app.sort === 'importanceAsc'){
                _sortNotes('importanceDesc');
            }else {
                _sortNotes('importanceDesc');
            }
        });

        $('#dashboard-display-all').on('click', function() {
            _displayNotes('all');
        });

        $('#dashboard-display-open').on('click', function() {
            _displayNotes('open');
        });

        $('#style-switcher').on('change', function() {
            app.setStyle($(this).val());
        });

        $('.label-delete').on('click', function() {
            _confirmDelete($(this).data('note-id'));
        });

        $('.confirmDelete').on('click', function() {
            _deleteNote($(this).data('note-id'));
        });

        $('.dismissDelete').on('click', function() {
            _dismissDelete($(this).data('note-id'));
        });

        $('.label-done').on('click', function() {
            _setNoteDone($(this).data('note-id'));
        });

        $('#message').show().delay(3000).fadeOut(1500, 'swing', function() {
            app.clearMessage();
        });
    };
};




