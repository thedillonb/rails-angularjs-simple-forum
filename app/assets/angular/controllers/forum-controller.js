'use strict';

var app = angular.module('app');

app.controller('ForumIndexController', ['$scope', 'Forum', function($scope, Forum) {
    //Grab all forums from the server
    $scope.items = Forum.query();

    //Destroy method for deleting a forum
    $scope.destroy = function(index) {

        //Tell the server to remove the object
        Forum.remove({id: $scope.items[index].id}, function() {
            //If successful, remove it from our collection
            $scope.items.splice(index, 1);
        });
    }
}]);

app.controller('ForumCreateController', ['$scope', '$location', 'Forum', function($scope, $location, Forum) {
    //The save method which is called when the user wants to submit their data
    $scope.save = function() {

        //Create the forum object to send to the back-end
        var forum = new Forum($scope.forum);

        //Save the forum object
        forum.$save(function() {

            //Redirect us back to the main page
            $location.path('/');

        }, function(response) {

            //Post response objects to the view
            $scope.errors = response.data.errors;
        });
    }
}]);

//A controller to show the forum and all it's glory
app.controller('ForumShowController', ['$scope', 'Forum', 'Comment', '$routeParams', function($scope, Forum, Comment, $routeParams) {
    //Grab the forum from the server
    $scope.forum = Forum.get({id: $routeParams.id})
}]);
