define(["jquery", "underscore", "backbone", "views/view"], function($, _, Backbone, View) {
  return View.extend({
    render: function() {
      var data, parent_view;
      parent_view = this;
      data = this.options.data || {};
      $(parent_view.el).empty();
      Handlebars.registerHelper("group_active", function(text) {
        if (text === "1") {
          return "checked";
        } else {
          return "";
        }
      });
      $.extend(data, parent_view.model.attributes);
      $(parent_view.el).hide().html(Handlebars.templates.user_edit(data)).fadeIn("slow");
      RT.dialogs.loading("close");
      return this;
    }
  });
});
