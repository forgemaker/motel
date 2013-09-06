define(["jquery", "underscore", "backbone", "collections/rooms", "config"], function($, _, Backbone, CollectionRooms, Config) {
  return Backbone.Model.extend({
    initialize: function() {
      this.lists = new CollectionRooms();
      return this.lists.url = Config.API.Room;
    },
    set_lists_url: function(motel_id) {
      return this.lists.url = Config.API.Room + "/list/" + motel_id;
    },
    url: function() {
      return Config.API.Room + "/" + this.id + "/edit";
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
