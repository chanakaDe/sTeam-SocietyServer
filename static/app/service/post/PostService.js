/**
 * Created by chanaka on 4/23/15.
 */
module.factory('postService', function ($http) {

    var postService = {

        /**
         * Get all roles from server
         *
         * @returns {*}
         */

        getSamplePost: function () {
            return $http({
                method: "GET",
                headers: headers,
                url: host.home + '/Groups.gsoc/hello-world'
            }).then(function (response) {
                return response.data;
            });
        }
    };
    return postService;
});