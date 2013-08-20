/*
 * OpenID users List
 */
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
    RT.CollectionUsers = Backbone.Collection.extend({
        parse: function(response) {
            return response.items;
        }
    });
    return RT.CollectionUsers;
});
