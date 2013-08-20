/*
 * The currently logged in user
 */
define([
    'jquery',
    'underscore',
    'backbone'
    ], function($, _, Backbone) {
    RT.ModelMe = Backbone.Model.extend({
        url: function() {
            return RT.API.me;
        },

        parse: function(response) {
            this.user_id = response.item.user_id;
            return response.item;
        }
    });
    return RT.ModelMe;
});