/**
 * Created by chanaka on 4/23/15.
 */
function ViewPostController($scope, postService) {

    /**
     * $scope variable declaration
     * @type {boolean}
     */

    $scope.demoPost = [];
    $scope.singlePost = "";

    /**
     * this service used to view the sample document/Post
     */
    postService.getSamplePost().then(function (data) {
        console.log(data);
        $scope.demoPost = data;

        //View the sample post object
        console.log(data.object.content);
        $scope.singlePost = data.object.content;
    });
}