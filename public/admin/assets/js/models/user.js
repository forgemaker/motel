define(["jquery", "underscore", "backbone", "collections/users", "config"], function($, _, Backbone, CollectionUsers, Config) {
  return Backbone.Model.extend({
    initialize: function() {
      this.lists = new CollectionUsers();
      return this.lists.url = Config.API.User;
    },
    set_params: function(params) {
      return this.lists.url = Config.API.User + "?" + $.param(params);
    },
    url: function() {
      return Config.API.User + "/" + this.id + "/edit";
    },
    parse: function(response) {
      $.extend(response.item, {
        is_edit: true
      });
      return response.item;
    }
  });
});
