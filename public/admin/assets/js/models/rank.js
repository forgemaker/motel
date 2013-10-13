define(["jquery", "underscore", "backbone", "collections/ranks", "config", "alertify"], function($, _, Backbone, CollectionRanks, Config, alertify) {
  return Backbone.Model.extend({
    urlRoot: Config.API.Rank,
    initialize: function() {
      this.lists = new CollectionRanks();
      this.lists.url = Config.API.Rank;
      return this.on("invalid", function(model, error) {
        return alertify.error(error);
      });
    },
    validate: function(attributes) {
      if (attributes.uid === '') {
        $("input[name=uid]").parent().addClass("has-error");
        return '手機編號必須填寫';
      }
      if (attributes.title === '') {
        $("input[name=title]").parent().addClass("has-error");
        return '標題必須填寫';
      }
    },
    set_lists_url: function(motel_id, params) {
      var query_string;
      query_string = params ? $.param(params) : '';
      return this.lists.url = Config.API.Rank + "/list/" + motel_id + "?" + query_string;
    },
    parse: function(response) {
      if (!response.item) {
        return false;
      }
      $.extend(response.item, {
        is_edit: true
      });
      return response.item;
    }
  });
});
