define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
    RT.CollectionWebSync = Backbone.Collection.extend({
        parse: function(response) {
            return response.items;
        }
    });
    return RT.CollectionWebSync;
});