"use strict";

require(['jquery', 'viewController', 'helpers'], function ($, viewController, helpers){

    var App = {
        ViewController: viewController,

        // load helper functions for the app
        loadHelpers: function (helpers) {
            for (var helperFunction in helpers) {
                self.ViewController[helperFunction] = helpers[helperFunction];
            }
        },

        // Init method for the app
        init: function () {
            // Init the controller
            var self = this;

            $.when(self.ViewController.init()).done(function (loaded) {
                    // Show the view after init the app
                    self.ViewController.show();
                }
            );
        }
    };




    // initialize the app
    App.init();
    App.loadHelpers(helpers);

});

