define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
  return Backbone.Collection.extend({
    parse: function(response) {
      this.total_pages = response.total_pages;
      return response.items;
    }
  });
});
