/*
 * A user
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/users',
    'collections/applications'
    ], function($, _, Backbone, CollectionUsers, CollectionApplications) {
    return Backbone.Model.extend({
        initialize: function() {
            this.lists = new CollectionUsers();
            this.lists.url = RT.API.getUserList;
        },

        set_params: function(params) {
            this.lists.url = RT.API.getUserList + '?' + $.param(params);
        },

        url: function() {
            return RT.API.getUser + '/' + this.id + '/edit';
        },

        parse: function(response) {
            var is_edit = true;
            $.extend(response.item, {
                "is_edit": is_edit
            });
            return response.item;
        }
    });
});