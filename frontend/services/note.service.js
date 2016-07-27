"use strict";

define([], function (){

    /*$(document).ready(function(){*/
        return {

            apiRoot: 'http://localhost:3000/api',

            getAllNotes: function (){

                return $.ajax({
                    type: 'GET',
                    dataType: 'json',
                    url: this.apiRoot + '/notes',
                    success: function (data){

                    }
                });

            },

            getNote: function (id){

                return $.ajax({
                    type: 'GET',
                    dataType: 'json',
                    url: this.apiRoot + '/notes/' + id,
                    success: function (data){

                    }
                });

            },

            editNote: function (note){

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

            },

            addNote: function (note){

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

            },

            deleteNote: function (id){

                return $.ajax({
                    type: 'DELETE',
                    dataType: 'json',
                    url: this.apiRoot + '/notes/' + id,
                    success: function (data){

                        console.log(data);
                    }
                });

            }

        };

    /*});*/
});