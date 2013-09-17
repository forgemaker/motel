define(["jquery", "underscore", "backbone", "alertify", "config"], function($, _, Backbone, alertify, Config) {
  return Backbone.View.extend({
    initialize: function() {
      if (this.model) {
        this.model.on("change", this.render, this);
      }
      if (this.model) {
        this.model.on("error", function(model, xhr, options) {
          return alertify.error(xhr.responseJSON.error_text);
        }, this);
      }
      if (this.collection) {
        this.collection.on("reset", this.render, this);
      }
      return this.debug = false;
    },
    events: {
      "click .delete": "delete_item",
      "click .delete_all": "delete_all"
    },
    delete_item: function(e) {
      var api_url, id, type;
      this.debug && console.log("delete");
      e.preventDefault();
      id = $(e.currentTarget).data("id");
      type = $(e.currentTarget).data("model");
      api_url = Config.API[type.ucFirst()] + "/" + id;
      if (confirm("確定刪除此筆資料?")) {
        RT.API.DELETE(api_url, null, function(response) {
          if (response.error_text) {
            alertify.error("刪除失敗");
          }
          if (response.success_text) {
            alertify.success($(e.currentTarget).data("title") + " 已被刪除");
            return $(e.currentTarget).parent().parent().remove();
          }
        });
      }
      e.stopImmediatePropagation();
      return false;
    },
    delete_all: function(e) {
      var api_url, form_id, form_info, length, type;
      this.debug && console.log("delete all");
      e.preventDefault();
      form_id = $(e.currentTarget).data("form");
      form_info = $(form_id).serializeObject();
      type = $(e.currentTarget).data("model");
      length = $("input:checked").length;
      api_url = Config.API[type.ucFirst()] + "/all";
      if (length === 0) {
        alertify.error("尚未選取任何項目");
        e.stopImmediatePropagation();
        return false;
      }
      if (confirm("確定刪除選取資料?")) {
        RT.API.DELETE(api_url, form_info, function(response) {
          if (response.error_text) {
            alertify.error("刪除失敗");
          }
          if (response.success_text) {
            alertify.success("刪除成功");
            return $("input:checked").each(function() {
              return $(this).parent().parent().remove();
            });
          }
        });
      }
      e.stopImmediatePropagation();
      return false;
    },
    handlebars: function() {
      var data, display, is_append, is_table, parent_view, template_name;
      if (!this.options.el) {
        $("body").append(this.el);
      }
      template_name = this.options.template_name || this.template_name;
      data = this.options.data || {};
      is_table = this.options.is_table || false;
      is_append = this.options.is_append || false;
      display = (this.options.display === false ? false : true);
      if (!template_name) {
        console.log("Error: Could not find template");
        return;
      }
      if (this.model && this.collection) {
        console.log("Both model and collection provided. Please override render() or mustache()");
      } else if (this.model) {
        $.extend(this.model.attributes, data);
        if (is_append) {
          $(this.el).append(Handlebars.templates[template_name](this.model.attributes));
        } else {
          $(this.el).html(Handlebars.templates[template_name](this.model.attributes));
        }
      } else if (this.collection) {
        $(this.el).empty();
        parent_view = this;
        this.collection.each(function(item) {
          var child_view;
          child_view = new View({
            tagName: (is_table ? "tr" : ""),
            template_name: template_name,
            model: item
          });
          return $(parent_view.el).append(child_view.render().el);
        });
      } else {
        $(this.el).hide().html(Handlebars.templates[template_name](data));
      }
      if (is_table) {
        RT.update_table();
      }
      if (display) {
        this.$el.fadeIn("slow");
      }
      return this;
    },
    render: function() {
      return this.handlebars();
    }
  });
});
