define(["jquery", "underscore", "backbone", "collections/users"], function($, _, Backbone, CollectionUsers) {
  return Backbone.Model.extend({
    initialize: function() {
      this.lists = new CollectionUsers();
      return this.lists.url = RT.API.User;
    },
    set_params: function(params) {
      return this.lists.url = RT.API.User + "?" + $.param(params);
    },
    url: function() {
      return RT.API.User + "/" + this.id + "/edit";
    },
    parse: function(response) {
      $.extend(response.item, {
        is_edit: true
      });
      return response.item;
    }
  });
});
