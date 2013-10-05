define(["jquery", "underscore", "backbone", "collections/users", "config", "alertify"], function($, _, Backbone, CollectionUsers, Config, alertify) {
  return Backbone.Model.extend({
    urlRoot: Config.API.User,
    initialize: function() {
      this.lists = new CollectionUsers();
      this.lists.url = Config.API.User;
      return this.on("invalid", function(model, error) {
        return alertify.error(error);
      });
    },
    validate: function(attributes) {
      if ($.trim(attributes.password) !== $.trim(attributes.confirm_password)) {
        $("input[name=password]").parent().addClass("has-error");
        $("input[name=confirm_password]").parent().addClass("has-error");
        return '登入密碼跟確認密碼必須相等';
      }
      if (attributes.username === '') {
        $("input[name=username]").parent().addClass("has-error");
        return '帳號必須填寫';
      }
    },
    set_params: function(params) {
      return this.lists.url = Config.API.User + "?" + $.param(params);
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
