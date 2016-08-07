"use strict";
define(['jquery'], function ($) {

    var NoteController = function (NoteService) {
        var NoteService = NoteService;

        var self = this;

        this.template = 'note';
        this.mode = '';
        this.note = {};
        this.mandatoryFields = ['title'];

        this.getNote = function (id) {

            $.when(NoteService.getNote(id)).done(function (note) {
                self.note = note;

                var data = {note: note};

                self.renderView(data);
            });
        };

        var _editNote = function () {
            var note;
            var importance;

            importance = $('.material-icons.importance').data('selectedimportance');

            note = {
                id: self.note.id,
                title: $('#title').val(),
                description: $('#description').val(),
                importance: Number(importance),
                dueDate: $('#dueDate').val(),
                createDate: self.note.createDate,
                finishDate: ''
            };


            if (_checkMandatory(self.mandatoryFields).length) {

                var data = {
                    note: note,
                    message: _setMessage('Bitte füllen Sie sämtliche Pflichtfelder * aus', 'warn')
                };

                _renderView(data);

                return false;
            }

            if ($('#dueDate').val().length && !app.checkInputDateFormat($('#dueDate').val())) {

                var data = {
                    note: note,
                    message: _setMessage('Falsches Datumsformat', 'warn')
                };

                _renderView(data);

                return false;
            }
            else {
                note.dueDate = app.isoStringToUtcString($('#dueDate').val());
            }

            $.when(NoteService.editNote(note)).done(function (res) {
                app.setMessage('Notiz bearbeitet', 'info');
                app.showDashboard();
            });

        };

        var _addNote = function () {
            var importance;

            importance = $('.material-icons.importance').data('selectedimportance');

            var note = {
                id: '',
                title: $('#title').val(),
                description: $('#description').val(),
                importance: Number(importance),
                dueDate: $('#dueDate').val(),
                createDate: '',
                finishDate: ''
            };

            if (_checkMandatory(self.mandatoryFields).length) {

                var data = {
                    note: note,
                    message: _setMessage('Bitte füllen Sie sämtliche Pflichtfelder * aus', 'warn')
                };

                _renderView(data);

                return false;
            }

            if ($('#dueDate').val().length && !app.checkInputDateFormat($('#dueDate').val())) {

                var data = {
                    note: note,
                    message: _setMessage('Falsches Datumsformat', 'warn')
                };

                _renderView(data);

                return false;
            }
            else {
                note.dueDate = app.isoStringToUtcString($('#dueDate').val());
            }

            $.when(NoteService.addNote(note)).done(function (res) {
                app.setMessage('Notiz hinzugefügt', 'new');
                app.showDashboard();
            });

        };

        var _dismissDelete = function () {
            $('.delete-modal-layer').css('display', 'none');
            $('.delete-modal-background').css('display', 'none');
        };

        var _confirmDelete = function () {
            $('.delete-modal-layer').css('display', 'inline-block');
            $('.delete-modal-background').css('display', 'block');
        };

        var _deleteNote = function (noteId) {
            $('.delete-modal-layer').css('display', 'none');
            $('.delete-modal-background').css('display', 'none');

            app.deleteNote(noteId);
        };

        var _setNoteDone = function () {
            var note = this.note;

            app.setNoteDone(note);
        };

        var _checkMandatory = function (mandatoryFields) {
            var missingFields = [];

            for (var i = 0; i < mandatoryFields.length; i++) {
                if ($('#' + mandatoryFields[i]).val().length == 0) {
                    missingFields.push(mandatoryFields[i]);
                }
            }

            return missingFields;
        };


        var _setMessage = function (text, type) {
            var message = {
                text: text,
                type: type
            };

            return message;
        };

        this.renderView = function (data) {

            $.when(app.compileHandlebar(self.template, data)).done(function (compiledHtml) {
                $('#main-container').html(compiledHtml);

                _registerEventHandler();
            });
        };

        var _registerEventHandler = function () {

            $('#submit').on('click', function () {

                if (self.mode === 'edit') {
                    _editNote();
                }
                else {
                    _addNote();
                }
            });

            $('#delete').on('click', function () {
                _confirmDelete();
            });

            $('.confirmDelete').on('click', function () {
                _deleteNote($(this).data('note-id'));
            });

            $('.dismissDelete').on('click', function () {
                _dismissDelete();
            });

            $('#setDone').on('click', function () {
                _setNoteDone($(this).data('note-id'));
            });

            $('.material-icons.importance').hover(function () {
                app.hoverImportance($(this));
            });

            $('.material-icons.importance').click(function () {
                app.setImportance($(this));
            });

            $('.importance-container').mouseout(function () {
                app.hoverImportanceClear($(this));
            });
        };

    };

    return NoteController;
});

