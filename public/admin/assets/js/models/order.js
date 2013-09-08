define(["jquery", "underscore", "backbone", "collections/orders", "config"], function($, _, Backbone, CollectionOrders, Config) {
  return Backbone.Model.extend({
    initialize: function() {
      this.lists = new CollectionOrders();
      return this.lists.url = Config.API.Order;
    },
    set_lists_url: function(motel_id) {
      return this.lists.url = Config.API.Order + "/list/" + motel_id;
    },
    url: function() {
      return Config.API.Order + "/" + this.id + "/edit";
    },
    parse: function(response) {
      $.extend(response.item, {
        is_edit: true
      });
      return response.item;
    }
  });
});
