define(["jquery", "underscore", "backbone", "alertify", "views/view"], function($, _, Backbone, alertify, View) {
  return View.extend({
    events: _.extend({
      "click #motel_add_form .save": "save"
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
          return window.location = "#!/motel/list";
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
      $(parent_view.el).hide().html(Handlebars.templates.motel_edit(data)).fadeIn("slow");
      $("#twzipcode").twzipcode({
        readonly: true,
        countySel: data.county,
        districtSel: data.district
      });
      $("#contract_start, #contract_end").datepicker({
        dateFormat: "yy-mm-dd"
      });
      $("#stay_time_1, #stay_time_2").timepicker();
      return this;
    }
  });
});
