define(["jquery", "underscore", "backbone", "collections/motels", "config", "alertify"], function($, _, Backbone, CollectionMotels, Config, alertify) {
  return Backbone.Model.extend({
    urlRoot: Config.API.Motel,
    initialize: function() {
      this.lists = new CollectionMotels();
      this.lists.url = Config.API.Motel;
      return this.on("invalid", function(model, error) {
        return alertify.error(error);
      });
    },
    validate: function(attributes) {
      if (attributes.title === '') {
        $('input[name="title"]').parent().addClass("has-error");
        return "名稱不能空白";
      }
    },
    set_params: function(params) {
      return this.lists.url = Config.API.Motel + "?" + $.param(params);
    },
    parse: function(response) {
      if (!response.item) {
        return false;
      }
      $.extend(response.item, {
        is_edit: true,
        is_image: (response.item.raw_name !== "" ? true : false)
      });
      return response.item;
    }
  });
});
