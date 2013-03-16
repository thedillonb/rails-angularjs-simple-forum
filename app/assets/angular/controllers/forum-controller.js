'use strict';

var app = angular.module('app');

app.controller('ForumIndexController', function($scope, Forum) {
    $scope.items = Forum.query();

    $scope.destroy = function(index) {
        Forum.remove({id: $scope.items[index].id}, function() {
            $scope.items.splice(index, 1);
        });
    }
});

app.controller('ForumCreateController', function($scope, $location, Forum) {
    $scope.save = function() {
        var forum = new Forum($scope.forum);
        forum.$save(function() {
            $location.path('/');
        }, function(response) {
            $scope.errors = response.data.errors;
        });
    }
});

app.controller('ForumShowController', function($scope, Forum, Comment, $routeParams) {
    $scope.forum = Forum.get({id: $routeParams.id})
});
