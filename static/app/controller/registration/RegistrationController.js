/**
 * Created by chanaka on 4/23/15.
 */
function RegistrationController($scope, registrationService) {

    /**
     * Add new User Method.
     * Using this method, you can add a new user to the system
     */

    $scope.addNewUser = function (data) {
        registrationService.registerNewUser(data).then(function (data) {
            console.log(data);

            //These are sample validation and error messages. In real system,
            // we can use modal base messaging system
            if (data === 'success') {
                alert("User Registration Done");
            } else {
                alert("Error");
            }
        });
    };

    /**
     * Login User Method.
     * Using this method, you can login a user to the system and get user details
     */

    $scope.loginUsertoSystem = function (data) {
        registrationService.loginUser(data).then(function (data) {
            console.log(data);

            //These are sample validation and error messages. In real system,
            // we can use modal base messaging system
            if (data === 'success') {
                alert("User Login Done");
            } else {
                alert("Error");
            }
        });
    }

}