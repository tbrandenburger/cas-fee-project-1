var NoteServices = (function(){
    "use strict";

    var apiRoot = "http://localhost:3000/api";

    return {


        getAllNotes: function(){

            return $.ajax({
                type: "GET",
                dataType: "json",
                url: apiRoot + "/notes",
                success: function(data){

                }
            });

        },

        initialize: function(){

        }
    }

});

NoteServices().initialize();