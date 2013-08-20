/*
 * Log List
 */
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
    RT.CollectionLogs = Backbone.Collection.extend({
        parse: function(response) {
            return response.items;
        }
    });
    return RT.CollectionLogs;
});
