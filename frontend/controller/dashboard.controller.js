var Dashboard = (function(){
    "use strict";

    var DashboardController =  {

        init: function() {
            this.getAllNotes();
        },

        getAllNotes: function() {

            $.when(NoteServices().getAllNotes()).done(function(data){
                console.log(data);
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


