define(["jquery", "underscore", "backbone", "collections/news"], function($, _, Backbone, CollectionNews) {
  return Backbone.Model.extend({
    initialize: function() {
      this.lists = new CollectionNews();
      return this.lists.url = RT.API.New;
    },
    set_lists_url: function(motel_id) {
      return this.lists.url = RT.API.New + "/list/" + motel_id;
    },
    url: function() {
      return RT.API.New + "/" + this.id + "/edit";
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
