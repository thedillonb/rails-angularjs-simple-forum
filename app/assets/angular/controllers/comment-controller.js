'use strict';

var app = angular.module('app');

app.controller('CommentsController', function($scope, Comment, $routeParams) {
    $scope.comments = Comment.query({forumId: $routeParams.id});

    $scope.save = function() {
        var obj = new Comment({name: $scope.name, body: $scope.body, forumId: $routeParams.id})
        obj.$save(function(response) {
            $scope.comments.unshift(response);
            $scope.name = $scope.body = ""
        }, function(response) {
            $scope.errors = response.data.errors;
        });
    }
});
