define(["jquery", "underscore", "backbone", "alertify"], function($, _, Backbone, alertify) {
  return Backbone.View.extend({
    initialize: function() {
      if (this.model) {
        this.model.on("change", this.render, this);
      }
      if (this.collection) {
        this.collection.on("reset", this.render, this);
      }
      return this.debug = true;
    },
    events: {
      "click .add": "add",
      "click .edit": "edit",
      "click .delete": "delete_item",
      "click .delete_all": "delete_all"
    },
    delete_item: function(e) {
      var api_url, id, model;
      this.debug && console.log("delete");
      e.preventDefault();
      id = $(e.currentTarget).data("id");
      model = $(e.currentTarget).data("model");
      api_url = RT.API[model.ucFirst()] + "/" + id;
      if (confirm("確定刪除此筆資料?")) {
        $.ajax({
          url: api_url,
          dataType: "json",
          type: "DELETE",
          beforeSend: function(jqXHR, settings) {
            return RT.dialogs.loading("open");
          },
          success: function(response) {
            if (response.error_text) {
              alertify.error("刪除失敗");
              RT.dialogs.loading("close");
            }
            if (response.success_text) {
              alertify.success($(e.currentTarget).data("title") + " 已被刪除");
              $(e.currentTarget).parent().parent().remove();
              return RT.dialogs.loading("close");
            }
          }
        });
      }
      e.stopImmediatePropagation();
      return false;
    },
    delete_all: function(e) {
      var api_url, form_id, form_info, length, model;
      this.debug && console.log("delete all");
      e.preventDefault();
      form_id = $(e.currentTarget).data("form");
      form_info = $(form_id).serializeObject();
      model = $(e.currentTarget).data("model");
      length = $("input:checked").length;
      api_url = RT.API[model.ucFirst()] + "/all";
      if (length === 0) {
        alertify.error("尚未選取任何項目");
        e.stopImmediatePropagation();
        return false;
      }
      if (confirm("確定刪除選取資料?")) {
        $.ajax({
          url: api_url,
          dataType: "json",
          type: "DELETE",
          data: form_info,
          beforeSend: function(jqXHR, settings) {
            return RT.dialogs.loading("open");
          },
          success: function(response) {
            if (response.error_text) {
              alertify.error("刪除失敗");
              RT.dialogs.loading("close");
            }
            if (response.success_text) {
              alertify.success("刪除成功");
              $("input:checked").each(function() {
                return $(this).parent().parent().remove();
              });
              return RT.dialogs.loading("close");
            }
          }
        });
      }
      e.stopImmediatePropagation();
      return false;
    },
    add: function(e) {
      var api_url, error, form_id, form_info, model, name;
      this.debug && console.log("add");
      e.preventDefault();
      $(".form-group").removeClass("has-error");
      $(".help-block").text("");
      model = $(e.currentTarget).data("model");
      form_id = $(e.currentTarget).data("form");
      form_info = $(form_id).serializeObject();
      api_url = RT.API[model.ucFirst()];
      error = false;
      switch (model) {
        case "user":
          if (!$.trim(form_info.username) || !$.trim(form_info.password)) {
            for (name in form_info) {
              if (!$.trim(form_info[name])) {
                $(form_id + " input[name=" + name + "]").parent().addClass("has-error");
                error = true;
              }
            }
            if (error) {
              alertify.error("紅色欄位務必填寫");
            }
            e.stopImmediatePropagation();
            return false;
          }
          if ($.trim(form_info.password) !== $.trim(form_info.confirm_password)) {
            $(form_id + " input[name=password]").parent().addClass("has-error");
            $(form_id + " input[name=confirm_password]").parent().addClass("has-error");
            alertify.error("登入密碼跟確認密碼必須相等");
            e.stopImmediatePropagation();
            return false;
          }
          $.ajax({
            url: RT.API.User,
            dataType: "json",
            type: "POST",
            data: form_info,
            beforeSend: function(jqXHR, settings) {
              return RT.dialogs.loading("open");
            },
            success: function(response) {
              if (response.error_text) {
                alertify.error(response.error_text);
                RT.dialogs.loading("close");
              }
              if (response.success_text) {
                alertify.success(form_info.username + " 帳號新增成功");
                $("input[type=text], input[type=password]").val("");
                RT.dialogs.loading("close");
                return window.location = "#!/user/list";
              }
            }
          });
          break;
        case "motel":
          if (!$.trim(form_info.title)) {
            $(form_id + " input[name=title]").parent().addClass("has-error");
            alertify.error("紅色欄位務必填寫");
            e.stopImmediatePropagation();
            return false;
          }
          $.ajax({
            url: RT.API.Motel,
            dataType: "json",
            type: "POST",
            data: form_info,
            beforeSend: function(jqXHR, settings) {
              return RT.dialogs.loading("open");
            },
            success: function(response) {
              if (response.error_text) {
                alertify.error(response.error_text);
                RT.dialogs.loading("close");
              }
              if (response.success_text) {
                alertify.success(form_info.title + " 摩鐵新增成功");
                RT.dialogs.loading("close");
                return window.location = "#!/motel/list";
              }
            }
          });
          break;
        case "room":
          $.ajax({
            url: RT.API.Room,
            dataType: "json",
            type: "POST",
            data: form_info,
            beforeSend: function(jqXHR, settings) {
              return RT.dialogs.loading("open");
            },
            success: function(response) {
              if (response.error_text) {
                alertify.error(response.error_text);
                RT.dialogs.loading("close");
              }
              if (response.success_text) {
                alertify.success(form_info.title + " 新增成功");
                RT.dialogs.loading("close");
                return window.location = "#!/room/list/" + form_info.motel_id;
              }
            }
          });
          break;
        case "new":
          $.ajax({
            url: RT.API.New,
            dataType: "json",
            type: "POST",
            data: form_info,
            beforeSend: function(jqXHR, settings) {
              return RT.dialogs.loading("open");
            },
            success: function(response) {
              if (response.error_text) {
                alertify.error(response.error_text);
                RT.dialogs.loading("close");
              }
              if (response.success_text) {
                alertify.success(form_info.title + " 新增成功");
                RT.dialogs.loading("close");
                return window.location = "#!/new/list/" + form_info.motel_id;
              }
            }
          });
          break;
        case "rank":
          $.ajax({
            url: RT.API.Rank,
            dataType: "json",
            type: "POST",
            data: form_info,
            beforeSend: function(jqXHR, settings) {
              return RT.dialogs.loading("open");
            },
            success: function(response) {
              if (response.error_text) {
                alertify.error(response.error_text);
                RT.dialogs.loading("close");
              }
              if (response.success_text) {
                alertify.success("評分成功");
                RT.dialogs.loading("close");
                return window.location = "#!/rank/list/" + form_info.motel_id;
              }
            }
          });
      }
      e.stopImmediatePropagation();
      return false;
    },
    edit: function(e) {
      var api_url, error, form_id, form_info, id, model, name;
      this.debug && console.log("edit");
      e.preventDefault();
      $(".form-group").removeClass("has-error");
      $(".help-block").text("");
      model = $(e.currentTarget).data("model");
      id = $(e.currentTarget).data("id");
      form_id = $(e.currentTarget).data("form");
      form_info = $(form_id).serializeObject();
      api_url = RT.API[model.ucFirst()] + "/" + id;
      switch (model) {
        case "user":
          if ($.trim(form_info.password) !== "" && $.trim(form_info.password) !== $.trim(form_info.confirm_password)) {
            $(form_id + " input[name=password]").parent().addClass("has-error");
            $(form_id + " input[name=confirm_password]").parent().addClass("has-error");
            alertify.error("修改密碼跟確認密碼必須相等");
            e.stopImmediatePropagation();
            return false;
          }
          break;
        case "room":
          for (name in form_info) {
            if (!$.trim(form_info[name])) {
              $(form_id + " input[name=" + name + "]").parent().addClass("has-error");
              error = true;
            }
          }
      }
      $.ajax({
        url: api_url,
        dataType: "json",
        type: "PUT",
        data: form_info,
        beforeSend: function(jqXHR, settings) {
          return RT.dialogs.loading("open");
        },
        success: function(response) {
          if (response.error_text) {
            alertify.error("修改失敗");
            RT.dialogs.loading("close");
          }
          if (response.success_text) {
            alertify.success("修改成功");
            return RT.dialogs.loading("close");
          }
        }
      });
      e.stopImmediatePropagation();
      return false;
    },
    handlebars: function() {
      var data, display, is_append, is_table, parent_view, template_name;
      if (!this.options.el) {
        $("body").append(this.el);
      }
      template_name = this.options.template_name || this.template_name;
      console.log(template_name);
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
      if (display) {
        RT.dialogs.loading("close");
      }
      return this;
    },
    render: function() {
      return this.handlebars();
    }
  });
});
