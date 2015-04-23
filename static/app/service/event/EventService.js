/**
 * Created by chanaka on 4/23/15.
 */
module.factory('eventService', function ($http) {

    var eventService = {

        /**
         * Get all roles from server
         *
         * @returns {*}
         */
        getallEvents: function () {
            return $http({
                method: "GET",
                headers: headers,
                url: host.techgrind + '.events'
            }).then(function (response) {
                return response.data;
            });
        },

        /**
         * Get event from sTeam server and order by date
         * @returns {*}
         */
        getEventsOrderByDate: function () {
            return $http({
                method: "GET",
                headers: headers,
                url: host.techgrind + 'events/order-by-date '
            }).then(function (response) {
                return response.data;
            });
        },

        /**
         * Get a specific event from sTeam server
         * @param event_name
         * @returns {*}
         */
        getSpecificEvent: function (event_name) {
            return $http({
                method: "GET",
                headers: headers,
                url: host.techgrind + 'events.blug-tuesday.1 ' + event_name
            }).then(function (response) {
                return response.data;
            });
        },

        /**
         * Save a new Event in the sTeam server
         * @param data
         * @returns {*}
         */
        submitEvent: function (data) {
            return $http({
                method: "POST",
                data: data,
                headers: headers,
                url: host.techgrind + '.events'
            }).then(function (response) {
                return response.data;
            });
        }
    };
    return eventService;
});