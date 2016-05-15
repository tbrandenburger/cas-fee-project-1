var NoteServices = (function(){
    "use strict";

    var apiRoot = "http://localhost:3000/api";

    return {

        apiCall: function(){
            var notes = $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://localhost:3000/api/notes",
                success: function(data){
                    return data;
                }
            });
        },

        getAllNotes: function(){

            return $.ajax({
                type: "GET",
                dataType: "json",
                url: apiRoot + "/notes",
                success: function(data){

                }
            });

        },

        // only method accessible outside
        initialize: function(){

        }
    }

});

NoteServices().initialize();