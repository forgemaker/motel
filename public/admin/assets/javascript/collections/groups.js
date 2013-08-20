define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
    RT.CollectionGroups = Backbone.Collection.extend({
        parse: function(response) {
            return response.item;
        }
    });
    return RT.CollectionGroups;
});
