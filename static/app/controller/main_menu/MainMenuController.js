/**
 * Created by chanaka on 4/22/15.
 */
function MainMenuController($scope) {

    /**
     * $scope variable declaration
     * @type {boolean}
     */
    $scope.showNewPost = false;

    /**
     * This controller used to manage all the login credentials
     * and all the login view permissions
     */
    $scope.viewNewPost = function () {
        $('#modal1').openModal();
        $scope.showNewPost = true;
    };


}
