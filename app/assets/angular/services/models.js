'use strict';

var app = angular.module('app');
app.factory('Forum', function($resource) {
    return $resource('/forums/:id', {id: '@id'});
});

app.factory('Comment', function($resource) {
    return $resource('/forums/:forumId/comments/:id', {forumId: '@forumId', id: '@id'});
});