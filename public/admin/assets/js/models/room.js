define(["jquery", "underscore", "backbone", "collections/rooms", "config", "alertify"], function($, _, Backbone, CollectionRooms, Config, alertify) {
  return Backbone.Model.extend({
    urlRoot: Config.API.Room,
    initialize: function() {
      this.lists = new CollectionRooms();
      this.lists.url = Config.API.Room;
      return this.on("invalid", function(model, error) {
        return alertify.error(error);
      });
    },
    validate: function(attributes) {
      if (attributes.title === '') {
        $("input[name=title]").parent().addClass("has-error");
        return '房型名稱必須填寫';
      }
      if (attributes.price_1 === '') {
        $("input[name=price_1]").parent().addClass("has-error");
        return '原價必須填寫';
      }
      if (attributes.price_2 === '') {
        $("input[name=price_2]").parent().addClass("has-error");
        return '特價(平日)必須填寫';
      }
      if (attributes.price_3 === '') {
        $("input[name=price_3]").parent().addClass("has-error");
        return '特價(平日)必須填寫';
      }
    },
    set_lists_url: function(motel_id, params) {
      var query_string;
      query_string = params ? $.param(params) : '';
      console.log(query_string);
      return this.lists.url = Config.API.Room + "/list/" + motel_id + "?" + query_string;
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
