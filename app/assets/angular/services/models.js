'use strict';

var app = angular.module('app');
app.factory('Forum', function($resource) {
    var Forum = $resource('/forums/:id', {id: '@id'},
        {
            update: {method: 'PUT'},
            destroy: {method: 'DELETE'}
        });
    return Forum;
});

app.factory('Comment', function($resource) {
    var Comment = $resource('/forums/:forumId/comments/:id', {forumId: '@forumId', id: '@id'},
        {
            update: {method: 'PUT'},
            destroy: {method: 'DELETE'}
        });
    return Comment;
});