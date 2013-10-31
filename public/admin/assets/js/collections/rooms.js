define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
  return Backbone.Collection.extend({
    parse: function(response) {
      this.is_weekend = +response.is_weekend;
      this.motel_id = response.motel_id;
      this.total_pages = response.total_pages;
      return response.items;
    }
  });
});
