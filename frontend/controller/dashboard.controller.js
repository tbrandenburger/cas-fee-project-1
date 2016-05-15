var Dashboard = (function(){
    "use strict";

    var DashboardController =  {

        init: function() {
            alert("init");
        },

        getNote: function() {

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


