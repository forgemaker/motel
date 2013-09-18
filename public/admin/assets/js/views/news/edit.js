define(["jquery", "underscore", "backbone", "views/view", "alertify"], function($, _, Backbone, View, alertify) {
  return View.extend({
    events: _.extend({
      "click #new_add_form .save": "save"
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
          alertify.success(message + "成功");
          return window.location = "#!/new/list/" + form_info.motel_id;
        }
      });
      return this;
    },
    render: function() {
      var data, parent_view;
      parent_view = this;
      data = this.options.data || {};
      $(parent_view.el).empty();
      $.extend(data, parent_view.model.attributes);
      $(parent_view.el).hide().html(Handlebars.templates.new_edit(data)).fadeIn("slow");
      $('#start_time, #end_time').datepicker({
        dateFormat: 'yy-mm-dd'
      });
      return this;
    }
  });
});
