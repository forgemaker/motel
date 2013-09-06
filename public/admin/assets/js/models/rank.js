define(["jquery", "underscore", "backbone", "collections/ranks", "config"], function($, _, Backbone, CollectionRanks, Config) {
  return Backbone.Model.extend({
    initialize: function() {
      this.lists = new CollectionRanks();
      return this.lists.url = Config.API.Rank;
    },
    set_lists_url: function(motel_id) {
      return this.lists.url = Config.API.Rank + "/list/" + motel_id;
    },
    url: function() {
      return Config.API.Rank + "/" + this.id + "/edit";
    },
    parse: function(response) {
      $.extend(response.item, {
        is_edit: true
      });
      return response.item;
    }
  });
});
