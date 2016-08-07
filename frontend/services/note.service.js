"use strict";
define([], function (){

    var NoteService = function (apiRoot){

        // Public
        this.apiRoot = apiRoot;

        // Public
        this.getAllNotes = function (){

            return $.ajax({
                type: 'GET',
                dataType: 'json',
                url: this.apiRoot + '/notes',
                success: function (data){

                }
            });
        };

        // Public
        this.getNote = function (id){

            return $.ajax({
                type: 'GET',
                dataType: 'json',
                url: this.apiRoot + '/notes/' + id,
                success: function (data){

                }
            });
        };

        this.editNote = function (note){

            return $.ajax({
                type: 'PUT',
                dataType: 'json',
                data: note,
                contentType: 'application/x-www-form-urlencoded',
                url: this.apiRoot + '/notes/' + note.id,
                success: function (data){
                    console.log(data);
                }
            });
        };

        this.addNote = function (note){

            return $.ajax({
                type: 'POST',
                dataType: 'json',
                data: note,
                contentType: 'application/x-www-form-urlencoded',
                url: this.apiRoot + '/notes/',
                success: function (data){
                    console.log(data);
                }
            });
        };

        this.deleteNote = function (id){

            return $.ajax({
                type: 'DELETE',
                dataType: 'json',
                url: this.apiRoot + '/notes/' + id,
                success: function (data){

                    console.log(data);
                }
            });

        };
    };

    return NoteService;
});