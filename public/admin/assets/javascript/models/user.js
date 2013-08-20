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
    RT.ModelUser = Backbone.Model.extend({
        //idAttribute: "user_id",
        initialize: function() {
            this.lists = new CollectionUsers();
            this.lists.url = RT.API.getUserList;
            this.apps = new CollectionApplications();
            this.apps.url = RT.API.getUserApps + '?id=' + this.id;
        },

        set_params: function(params) {
            this.lists.url = RT.API.getUserList + '?' + $.param(params);
        },

        url: function() {
            return RT.API.getUser + '?id=' + this.id;
        },

        parse: function(response) {
            var is_edit = true;
            $.extend(response.item, {
                "is_edit": is_edit
            });
            return response.item;
        }
    });
    return RT.ModelUser;
});