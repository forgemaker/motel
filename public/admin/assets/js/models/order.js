define(["jquery", "underscore", "backbone", "collections/orders", "config", "alertify"], function($, _, Backbone, CollectionOrders, Config, alertify) {
  return Backbone.Model.extend({
    urlRoot: Config.API.Order,
    initialize: function() {
      this.lists = new CollectionOrders();
      this.lists.url = Config.API.Order;
      return this.on("invalid", function(model, error) {
        return alertify.error(error);
      });
    },
    validate: function(attributes) {
      if (attributes.uid === '') {
        $("input[name=uid]").parent().addClass("has-error");
        return '手機編號必須填寫';
      }
      if (attributes.user_name === '') {
        $("input[name=user_name]").parent().addClass("has-error");
        return '姓名必須填寫';
      }
      if (attributes.user_phone === '') {
        $("input[name=user_phone]").parent().addClass("has-error");
        return '手機必須填寫';
      }
      if (attributes.status_id === '') {
        $("input[name=status_id]").parent().addClass("has-error");
        return '狀態必須填寫';
      }
    },
    set_lists_url: function(motel_id, params) {
      var query_string;
      query_string = params ? $.param(params) : '';
      return this.lists.url = Config.API.Order + "/list/" + motel_id + "?" + query_string;
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
