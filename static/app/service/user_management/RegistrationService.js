/**
 * Created by chanaka on 4/23/15.
 */
module.factory('registrationService', function ($http) {

    var registrationService = {

        /**
         * Register a new user / save user data in sTeam server
         *
         * @returns {*}
         */
        registerNewUser: function (data) {
            return $http({
                method: "POST",
                data: data,
                headers: headers,
                url: host.register
            }).then(function (response) {
                return response.data;
            });
        },

        /**
         * Login a user and check login details with sTeam server
         * @returns {*}
         */
        loginUser: function () {
            return $http({
                method: "POST",
                data: data,
                headers: headers,
                url: host.login
            }).then(function (response) {
                return response.data;
            });
        }
    };
    return registrationService;
});