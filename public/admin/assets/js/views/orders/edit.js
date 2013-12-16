define(["jquery", "underscore", "backbone", "views/view", "alertify", "sockieio"], function($, _, Backbone, View, alertify) {
  return View.extend({
    events: _.extend({
      "click #order_add_form .save": "save"
    }, View.prototype.events),
    save: function(e) {
      var form_id, form_info, message;
      e.preventDefault();
      $(".form-group").removeClass("has-error");
      form_id = $(e.currentTarget).data("form");
      form_info = $(form_id).serializeObject();
      message = $(e.currentTarget).data("message");
      this.model.set(form_info, {
        silent: true
      });
      this.model.save(form_info, {
        success: function(model, response, options) {
          return alertify.success(message + "成功");
        }
      });
      return this;
    },
    render: function() {
      var data, parent_view;
      parent_view = this;
      data = this.options.data || {};
      $(parent_view.el).empty();
      parent_view.model.attributes["type"] = +parent_view.model.attributes["type"];
      $.extend(data, parent_view.model.attributes);
      $(parent_view.el).hide().html(Handlebars.templates.order_edit(data)).fadeIn("slow");
      $('#date_purchased, #date_finished').datetimepicker({
        timeFormat: 'HH:mm:ss',
        dateFormat: 'yy-mm-dd'
      });
      return this;
    }
  });
});
