/*
 * OpenID users List
 */
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
    return Backbone.Collection.extend({
        parse: function(response) {
            return response.items;
        }
    });
});
