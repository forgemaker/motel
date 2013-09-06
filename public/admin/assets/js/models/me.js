define(["jquery", "underscore", "backbone", "config"], function($, _, Backbone, Config) {
  return Backbone.Model.extend({
    url: Config.API.me,
    parse: function(response) {
      this.user_id = response.item.user_id;
      return response.item;
    }
  });
});
