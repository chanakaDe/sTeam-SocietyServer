/**
 * Created by chanaka on 4/20/15.
 */
function AddNewPostController($scope) {

    /**
     * Declaring system and scope variables
     * @type {string}
     */
    $scope.content = '';


    /**
     * Method to add a new post
     */
    $scope.savePost = function () {
        var content = $scope.content;
        console.log(content);
        alert("Added new Post Done");
    }

}