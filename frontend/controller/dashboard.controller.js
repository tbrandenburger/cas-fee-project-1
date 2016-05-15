var Dashboard = (function(){
    "use strict";

    var DashboardController =  {

        init: function() {
            this.getAllNotes();
        },

        getAllNotes: function() {
            console.log("getallnotes")
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://localhost:3000/api/notes",
                success: function(data){
                    console.log(data);
                }
            });
        },

        deleteNote: function () {

        }

    };

    return {
        // only method accessible outside
        initialize: function(){

            // init the controller
            DashboardController.init();

        }
    }

});

Dashboard().initialize();


