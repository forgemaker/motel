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
      var self;
      self = this;
      if (attributes.title === '') {
        $('input[name="title"]').parent().addClass("has-error");
        return "名稱不能空白";
      }
      if (attributes.longitude === '' || attributes.latitude === '') {
        return "請點選轉換經座標按鈕";
      }
      if (attributes.stay_time_1 === '' || attributes.stay_time_2 === '') {
        return "住宿進房時間必須填寫";
      }
      if (self.options.isAdmin) {
        if (attributes.contract_start === '') {
          $('input[name="contract_start"]').parent().addClass("has-error");
          $('input[name="contract_start"]').focus();
          return "合約開始時間不能空白";
        }
        if (attributes.contract_end === '') {
          $('input[name="contract_end"]').parent().addClass("has-error");
          $('input[name="contract_end"]').focus();
          return "合約結束時間不能空白";
        }
        if (attributes.contract_start >= attributes.contract_end) {
          $('input[name="contract_start"]').parent().addClass("has-error");
          $('input[name="contract_start"]').focus();
          return "合約開始時間不能大於合約結束時間";
        }
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
