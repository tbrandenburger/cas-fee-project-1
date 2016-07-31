"use strict";

var NoteController = function (NoteServices) {
    var NoteServices = NoteServices;

    this.template = 'note';
    this.mode = '';
    this.note = {};
    this.mandatoryFields = ['title'];

    this.getNote = function (id) {
        var self = this;

        $.when(NoteServices.getNote(id)).done(function (note) {
            self.note = note;

            var data = {note: note};

            self.renderView(data);
        });
    };

    this.editNote = function () {
        var note;
        var importance;

        importance = $('.material-icons.importance').data('selectedimportance');

        note = {
            id: this.note.id,
            title: $('#title').val(),
            description: $('#description').val(),
            importance: Number(importance),
            dueDate: $('#dueDate').val(),
            createDate: this.note.createDate,
            finishDate: ''
        };


        if (this.checkMandatory(this.mandatoryFields).length) {

            var data = {
                note: note,
                message: this.setMessage('Bitte füllen Sie sämtliche Pflichtfelder * aus', 'warn')
            };

            this.renderView(data);

            return false;
        }

        if ($('#dueDate').val().length && !app.checkInputDateFormat($('#dueDate').val())) {

            var data = {
                note: note,
                message: this.setMessage('Falsches Datumsformat', 'warn')
            };

            this.renderView(data);

            return false;
        }
        else {
            note.dueDate = app.isoStringToUtcString($('#dueDate').val());
        }

        $.when(NoteServices.editNote(note)).done(function (res) {
            app.setMessage('Notiz bearbeitet', 'info');
            app.showDashboard();
        });

    };

    this.addNote = function () {
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

        if (this.checkMandatory(this.mandatoryFields).length) {

            var data = {
                note: note,
                message: this.setMessage('Bitte füllen Sie sämtliche Pflichtfelder * aus', 'warn')
            };

            this.renderView(data);

            return false;
        }

        if ($('#dueDate').val().length && !app.checkInputDateFormat($('#dueDate').val())) {

            var data = {
                note: note,
                message: this.setMessage('Falsches Datumsformat', 'warn')
            };

            this.renderView(data);

            return false;
        }
        else {
            note.dueDate = app.isoStringToUtcString($('#dueDate').val());
        }

        $.when(NoteServices.addNote(note)).done(function (res) {
            app.setMessage('Notiz hinzugefügt', 'new');
            app.showDashboard();
        });

    };

    this.dismissDelete = function () {
        $('.delete-modal-layer').css('display', 'none');
        $('.delete-modal-background').css('display', 'none');
    };

    this.confirmDelete = function () {
        $('.delete-modal-layer').css('display', 'inline-block');
        $('.delete-modal-background').css('display', 'block');
    };

    this.deleteNote = function (noteId) {
        $('.delete-modal-layer').css('display', 'none');
        $('.delete-modal-background').css('display', 'none');

        app.deleteNote(noteId);
    };

    this.setNoteDone = function () {
        var note = this.note;

        app.setNoteDone(note);
    };

    this.checkMandatory = function (mandatoryFields) {
        var missingFields = [];

        for (var i = 0; i < mandatoryFields.length; i++) {
            if ($('#' + mandatoryFields[i]).val().length == 0) {
                missingFields.push(mandatoryFields[i]);
            }
        }

        return missingFields;
    };


    this.setMessage = function (text, type) {
        var message = {
            text: text,
            type: type
        };

        return message;
    };

    this.renderView = function (data) {
        var self = this;
        $.when(app.compileHandlebar(this.template, data)).done(function (compiledHtml) {
            $('#main-container').html(compiledHtml);

            self.registerEventHandler();
        });
    };

    this.registerEventHandler = function () {
        var self = this;

        $('#submit').on('click', function () {

            if (self.mode === 'edit') {
                self.editNote();
            }
            else {
                self.addNote();
            }
        });

        $('#delete').on('click', function () {
            self.confirmDelete();
        });

        $('.confirmDelete').on('click', function () {
            self.deleteNote($(this).data('note-id'));
        });

        $('.dismissDelete').on('click', function () {
            self.dismissDelete();
        });

        $('#setDone').on('click', function () {
            self.setNoteDone($(this).data('note-id'));
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

