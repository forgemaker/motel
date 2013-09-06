define(["jquery", "underscore", "backbone", "collections/motels", "config"], function($, _, Backbone, CollectionMotels, Config) {
  return Backbone.Model.extend({
    initialize: function() {
      this.lists = new CollectionMotels();
      return this.lists.url = Config.API.Motel;
    },
    set_params: function(params) {
      return this.lists.url = Config.API.Motel + "?" + $.param(params);
    },
    url: function() {
      return Config.API.Motel + "/" + this.id + "/edit";
    },
    parse: function(response) {
      $.extend(response.item, {
        is_edit: true,
        is_image: (response.item.raw_name !== "" ? true : false)
      });
      return response.item;
    }
  });
});
