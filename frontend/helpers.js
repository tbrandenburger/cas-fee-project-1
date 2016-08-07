"use strict";
define([], function () {

    var Helpers = {
        // Get a specific url parameter
        getQueryVariable: function (variable) {
            var query = window.location.search.substring(1);
            var vars = query.split('&');

            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (pair[0] == variable) {
                    return pair[1];
                }
            }
        },

        checkInputDateFormat: function (dateString) {
            var checkPassed = false;
            var pattern = new RegExp(/^\d{1,2}([.\/-])\d{1,2}([.\/-])\d{4}$/);
            checkPassed = pattern.test(dateString);

            return checkPassed;
        },

        isoStringToUtcString: function (dateTimeString) {
            try {
                var dateStringParts = dateTimeString.split(' ');
                var dateString = dateStringParts[0];
                var timeString = dateStringParts[1];
                var dateStringParts = dateString.split('.');
                var timeStringParts = timeString.split(':');

                var year = Number(dateStringParts[2]);
                var month = Number(dateStringParts[1]) - 1;
                var day = Number(dateStringParts[0]);
                var hour = Number(timeStringParts[0]);
                var minutes = Number(timeStringParts[1]);
                var seconds = 0;

                var dateObject = new Date(year, month, day, hour, minutes, seconds);

                return dateObject.toUTCString();
            }
            catch (err) {
                return dateTimeString;
            }
        },

        setImportance: function (element) {
            var importance = element.data('importance');
            var noteId = element.data('note-id');

            $('span[data-note-id="' + noteId + '"] .material-icons.importance').each(function () {

                var currentElement = $(this);
                currentElement.data('selectedimportance', importance);
            });
        },

        hoverImportance: function (element) {
            var importance = element.data('importance');
            var noteId = element.data('note-id');

            $('span[data-note-id="' + noteId + '"] .material-icons.importance').each(function () {

                var currentElement = $(this);

                if (currentElement.data('importance') <= importance) {
                    currentElement.addClass('importance-selected');
                    currentElement.html('star');
                }
                else {
                    currentElement.removeClass('importance-selected');

                    if (currentElement.data('importance') > importance) {
                        currentElement.html('star_border');
                    }
                }
            });
        },

        hoverImportanceClear: function (element, importance) {
            var noteId = element.data('note-id');

            $('span[data-note-id="' + noteId + '"] .material-icons.importance').each(function () {
                var currentElement = $(this);
                var importance = currentElement.data('importance');
                var selectedimportance = currentElement.data('selectedimportance');

                currentElement.removeClass('importance-selected');

                if (importance <= selectedimportance) {
                    currentElement.html('star');
                }
                else {
                    currentElement.html('star_border');
                }
            });
        }
    };

    return Helpers;

});