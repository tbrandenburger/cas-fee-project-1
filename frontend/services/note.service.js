"use strict";
$(document).ready(function(){
    App.NoteServices = {

        apiRoot: "http://localhost:3000/api",

        getAllNotes: function (){

            return $.ajax({
                type: "GET",
                dataType: "json",
                url: this.apiRoot + "/notes",
                success: function (data){

                }
            });

        },

        getNote: function (id){

            return $.ajax({
                type: "GET",
                dataType: "json",
                url: this.apiRoot + "/notes/" + id,
                success: function (data){

                }
            });

        },

        editNote: function (note){

            return $.ajax({
                type: "PUT",
                dataType: "json",
                data: note,
                url: this.apiRoot + "/notes/" + note.id,
                success: function (data){

                }
            });

        },

        deleteNote: function (id){

            return $.ajax({
                type: "DELETE",
                dataType: "json",
                url: this.apiRoot + "/notes/" + id,
                success: function (data){
                    App.DashboardController.getAllNotes();
                }
            });

        }

    };

});