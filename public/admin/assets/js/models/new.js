define(["jquery", "underscore", "backbone", "collections/news", "config", "alertify"], function($, _, Backbone, CollectionNews, Config, alertify) {
  return Backbone.Model.extend({
    urlRoot: Config.API.New,
    initialize: function() {
      this.lists = new CollectionNews();
      this.lists.url = Config.API.New;
      return this.on("invalid", function(model, error) {
        return alertify.error(error);
      });
    },
    validate: function(attributes) {
      if (attributes.title === '') {
        $("input[name=title]").parent().addClass("has-error");
        return '標題必須填寫';
      }
      if (attributes.start_time === '') {
        $("input[name=start_time]").parent().addClass("has-error");
        return '起始時間必須填寫';
      }
      if (attributes.end_time === '') {
        $("input[name=end_time]").parent().addClass("has-error");
        return '結束日期必須填寫';
      }
      if (attributes.start_time >= attributes.end_time) {
        $('input[name="start_time"]').parent().addClass("has-error");
        $('input[name="start_time"]').focus();
        return "起始時間不能大於結束時間";
      }
    },
    set_lists_url: function(motel_id, params) {
      var query_string;
      query_string = params ? $.param(params) : '';
      return this.lists.url = Config.API.New + "/list/" + motel_id + "?" + query_string;
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
