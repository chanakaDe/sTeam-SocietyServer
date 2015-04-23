var module = angular.module('sTeam', ['ngRoute', 'textAngular']);

module.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'app/view/main/PostView.html',
            controller: ''
        }).when('/newPost', {
            templateUrl: 'app/view/post/NewPost.html',
            controller: ''
        }).otherwise({
            redirectTo: '/'
        });
});

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};
