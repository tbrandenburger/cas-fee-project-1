"use strict";
$(document).ready(function(){
    App.NoteController = {

        template: 'note',
        mode: '',
        note: {},
        mandatoryFields: ['title'],

        getNote: function (id) {
            var self = this;

             $.when(App.NoteServices.getNote(id)).done(function(note){
                 self.note = note;

                 var data = {note: note};

                 self.renderView(data);
             });
        },

        editNote: function () {
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


            if (this.checkMandatory(this.mandatoryFields).length){

                var data = {
                    note: note,
                    message: this.setMessage('Bitte füllen Sie sämtliche Pflichtfelder * aus', 'warn')
                };

                this.renderView(data);

                return false;
            }

            if ($('#dueDate').val().length && !App.ViewController.checkInputDateFormat($('#dueDate').val())){

                var data = {
                    note: note,
                    message: this.setMessage('Falsches Datumsformat', 'warn')
                };

                this.renderView(data);

                return false;
            }
            else{
                note.dueDate = App.ViewController.isoStringToUtcString($('#dueDate').val());
            }

            $.when(App.NoteServices.editNote(note)).done(function(res){
                App.ViewController.setMessage('Notiz bearbeitet', 'info');
                App.ViewController.showDashboard();
            });

        },

        addNote: function (){
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

            if (this.checkMandatory(this.mandatoryFields).length){

                var data = {
                    note: note,
                    message: this.setMessage('Bitte füllen Sie sämtliche Pflichtfelder * aus', 'warn')
                };

                this.renderView(data);

                return false;
            }

            if ($('#dueDate').val().length && !App.ViewController.checkInputDateFormat($('#dueDate').val())){

                var data = {
                    note: note,
                    message: this.setMessage('Falsches Datumsformat', 'warn')
                };

                this.renderView(data);

                return false;
            }
            else{
                note.dueDate = App.ViewController.isoStringToUtcString($('#dueDate').val());
            }

            $.when(App.NoteServices.addNote(note)).done(function(res){
                App.ViewController.setMessage('Notiz hinzugefügt', 'new');
                App.ViewController.showDashboard();
            });

        },

        dismissDelete: function () {
            $('.delete-modal-layer').css('display', 'none');
            $('.delete-modal-background').css('display', 'none');
        },

        confirmDelete: function () {
            $('.delete-modal-layer').css('display', 'inline-block');
            $('.delete-modal-background').css('display', 'block');
        },

        deleteNote: function (noteId) {
            $('.delete-modal-layer').css('display', 'none');
            $('.delete-modal-background').css('display', 'none');

            App.ViewController.deleteNote(noteId);
        },

        setNoteDone: function(){
            var note = this.note;

            App.ViewController.setNoteDone(note);
        },

        checkMandatory: function (mandatoryFields) {
            var missingFields = [];

            for (var i = 0; i < mandatoryFields.length; i++){
                if ($('#' + mandatoryFields[i]).val().length == 0){
                    missingFields.push(mandatoryFields[i]);
                }
            }

            return missingFields;
        },


        setMessage: function (text, type) {
            var message = {
                text: text,
                type: type
            };

            return message;
        },

        renderView: function (data)
        {
            var self = this;
            $.when(App.ViewController.compileHandlebar(this.template, data)).done(function (compiledHtml)
            {
                $('#main-container').html(compiledHtml);

                self.registerEventHandler();
            });
        },

        registerEventHandler: function (){
            var self = this;

            $('#submit').on('click', function () {

                if (self.mode === 'edit'){
                    self.editNote();
                }
                else{
                    self.addNote();
                }
            });

            $('#delete').on('click', function() {
                self.confirmDelete();
            });

            $('.confirmDelete').on('click', function() {
                self.deleteNote($(this).data('note-id'));
            });

            $('.dismissDelete').on('click', function() {
                self.dismissDelete();
            });

            $('#setDone').on('click', function() {
                self.setNoteDone($(this).data('note-id'));
            });

            $('.material-icons.importance').hover(function() {
                App.ViewController.hoverImportance($(this));
            });

            $('.material-icons.importance').click(function() {
                App.ViewController.setImportance($(this));
            });

            $('.importance-container').mouseout(function() {
                App.ViewController.hoverImportanceClear($(this));
            });
        }
    };
});
