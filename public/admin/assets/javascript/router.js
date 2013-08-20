
  RT.API = {
    me: root_path + "WebAPI/index.php/API/Auth/getUserData",
    getUser: root_path + "WebAPI/index.php/API/Auth/getUser",
    getUserList: root_path + "WebAPI/index.php/API/Auth/getUserList",
    getUserApps: root_path + "WebAPI/index.php/API/Auth/getUserList",
    getWebsyncList: root_path + "WebAPI/index.php/API/Auth/getWebsyncList",
    getWebSync: root_path + "WebAPI/index.php/API/Auth/getWebSync",
    getAppList: root_path + "WebAPI/index.php/API/App/getAppList",
    getAppInfo: root_path + "WebAPI/index.php/API/App/getAppInfo",
    getGroupList: root_path + "WebAPI/index.php/API/Auth/getGroupList",
    getGroupInfo: root_path + "WebAPI/index.php/API/Auth/getGroup",
    getAcls: root_path + "WebAPI/index.php/API/Acl/AclList",
    getLogList: root_path + "WebAPI/index.php/API/Log/List"
  };

  RT.dialogs = {
    loading: function(action) {
      if (action !== "close") {
        return $("#loading").show();
      } else {
        return $("#loading").hide();
      }
    }
  };

  RT.show_message = function(id, type, message) {
    var html;
    $(".alert").remove();
    html = "<div class=\"alert\" style=\"display:none;\"><a class=\"close\" data-dismiss=\"alert\">×</a><span class=\"message\"></span></div>";
    type = type || "alert-success";
    message = message || "";
    if (message === "" || id === undefined) return false;
    $(html).insertBefore(id);
    $(".message").text(message);
    return $(".alert").addClass(type).fadeIn("slow", function() {
      return setTimeout((function(e) {
        return $(".alert").fadeOut("slow");
      }), 10000);
    });
  };

  RT.update_table = function() {
    $(".tablesorter").tablesorter({
      headers: {
        0: {
          sorter: false
        }
      },
      selectorHeaders: "> thead th",
      theme: 'blue'
    });
    $("table").trigger("update");
    return $("#sidebar").equalHeight();
  };

  RT.generateSerial = function(len) {
    var chars, letterOrNumber, newNum, randomstring, rnum, string_length, x;
    chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    string_length = (len === undefined || isNaN(parseInt(len)) || len === "" ? 32 : parseInt(len));
    randomstring = "";
    x = 0;
    while (x < string_length) {
      letterOrNumber = Math.floor(Math.random() * 2);
      if (letterOrNumber === 0) {
        newNum = Math.floor(Math.random() * 9);
        randomstring += newNum;
      } else {
        rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
      }
      x++;
    }
    return randomstring;
  };

  define(["jquery", "underscore", "backbone", "models/me", "models/user", "models/websync", "models/application", "models/group", "models/privilege", "models/log", "views/view", "views/users/list", "views/users/edit", "views/websyncs/list", "views/applications/list", "views/groups/list", "views/privileges/list", "views/logs/list", "../vendor/moment/moment", "../vendor/jquery-serialize-object/jquery.serialize-object", "../vendor/jquery.tablesorter/js/jquery.tablesorter", "libs/jquery/jquery-ui-1.8.18.custom.min", "libs/jquery/bootstrap-modal", "libs/jquery/swfobject", "libs/jquery/jquery.uploadify.v2.1.4.min", "libs/jquery/jquery.equalHeight", "libs/twitter/bootstrap-tab", "handlebars", "libs/handlebars-helper", "templates"], function($, _, Backbone, ModelMe, ModelUser, ModelWebsync, ModelApplication, ModelGroup, ModelPrivilege, ModelLog, View, ViewUsersList, ViewUser, ViewWebsyncsList, ViewApplicationsList, ViewGroupsList, ViewPrivilegesList, ViewLogsList) {
    var AppRouter, initialize;
    AppRouter = Backbone.Router.extend({
      site_name: "WebSync 後台管理",
      routes: {
        "": "home",
        "!/home": "home",
        "!/websync/:action": "websync",
        "!/user/:action": "user",
        "!/websync/:action/:id": "websync",
        "!/user/:action/:id": "user",
        "!/application/:action": "application",
        "!/application/:action/:id": "application",
        "!/group/:action": "group",
        "!/group/:action/:id": "group",
        "!/privilege/:action": "privilege",
        "!/privilege/:action/:id": "privilege",
        "!/log/:action": "log",
        "!/log/:action/:id": "log"
      },
      initialize: function() {
        this.me = new ModelMe();
        this.me.bind("change", this.update_user, this);
        this.me.fetch();
        if (!this.user_model) this.user_model = new ModelUser();
        if (!this.websync_model) this.websync_model = new ModelWebsync();
        if (!this.app_model) this.app_model = new ModelApplication();
        if (!this.group_model) this.group_model = new ModelGroup();
        if (!this.privilege_model) this.privilege_model = new ModelPrivilege();
        if (!this.log_model) return this.log_model = new ModelLog();
      },
      update_title: function(title) {
        if (title) {
          document.title = this.site_name + "::" + title;
          return $(".section_title").text(title);
        } else {
          document.title = this.site_name;
          return $(".section_title").text("");
        }
      },
      user: function(action, id) {
        this.reset();
        RT.dialogs.loading("open");
        $("#main").html("");
        switch (action) {
          case "list":
            this.page = id || 1;
            this.update_title("帳號列表");
            if (!this.view_users_list) {
              this.view_users_list = new ViewUsersList({
                el: "#main",
                collection: this.user_model.lists,
                model_name: this.user_model,
                page: this.page
              });
            }
            this.view_users_list.options.page = this.page;
            this.user_model.set_params({
              page: this.page
            });
            return this.user_model.lists.fetch();
          case "add":
            this.update_title("新增帳號");
            if (!this.view_users_add) {
              this.view_users_add = new View({
                template_name: "user_edit",
                el: "#main"
              });
            }
            return this.view_users_add.render();
          case "edit":
            this.update_title("修改帳號");
            if (!this.view_user) {
              this.view_user = new ViewUser({
                el: "#main",
                model: this.user_model
              });
            } else {
              if (!this.user_model.hasChanged()) this.user_model.trigger("change");
            }
            this.user_model.id = id;
            return this.user_model.fetch();
        }
      },
      websync: function(action, id) {
        this.reset();
        RT.dialogs.loading("open");
        $("#main").html("");
        switch (action) {
          case "list":
            this.page = id || 1;
            this.update_title("WebSync 帳號列表");
            if (!this.view_websyncs_list) {
              this.view_websyncs_list = new ViewWebsyncsList({
                el: "#main",
                collection: this.websync_model.lists,
                model_name: this.websync_model,
                page: this.page
              });
            }
            this.view_websyncs_list.options.page = this.page;
            this.websync_model.set_params({
              page: this.page
            });
            return this.websync_model.lists.fetch();
          case "add":
            this.update_title("新增 WebSync 帳號");
            if (!this.view_websyncs_add) {
              this.view_websyncs_add = new View({
                template_name: "websync_edit",
                el: "#main"
              });
            }
            return this.view_websyncs_add.render();
          case "edit":
            this.update_title("修改 WebSync 帳號");
            if (!this.view_websync) {
              this.view_websync = new View({
                template_name: "websync_edit",
                el: "#main",
                model: this.websync_model
              });
            } else {
              if (!this.websync_model.hasChanged()) {
                this.websync_model.trigger("change");
              }
            }
            this.websync_model.id = id;
            return this.websync_model.fetch();
        }
      },
      application: function(action, id) {
        RT.dialogs.loading("open");
        $("#main").html("");
        switch (action) {
          case "list":
            this.page = id || 1;
            this.update_title("軟體列表");
            if (!this.view_apps_list) {
              this.view_apps_list = new ViewApplicationsList({
                el: "#main",
                collection: this.app_model.lists,
                model_name: this.app_model,
                page: this.page
              });
            }
            this.view_apps_list.options.page = this.page;
            this.app_model.set_params({
              page: this.page
            });
            return this.app_model.lists.fetch();
          case "add":
            this.update_title("新增軟體");
            if (!this.view_app_add) {
              this.view_app_add = new View({
                template_name: "application_edit",
                el: "#main"
              });
            }
            return this.view_app_add.render();
          case "edit":
            this.update_title("修改軟體");
            if (!this.view_app) {
              this.view_app = new View({
                template_name: "application_edit",
                el: "#main",
                model: this.app_model
              });
            } else {
              if (!this.app_model.hasChanged()) this.app_model.trigger("change");
            }
            this.app_model.id = id;
            return this.app_model.fetch();
        }
      },
      group: function(action, id) {
        RT.dialogs.loading("open");
        $("#main").html("");
        switch (action) {
          case "list":
            this.page = id || 1;
            this.update_title("群組列表");
            if (!this.view_groups_list) {
              this.view_groups_list = new ViewGroupsList({
                el: "#main",
                collection: this.group_model.lists,
                model_name: this.group_model,
                page: this.page
              });
            }
            this.view_groups_list.options.page = this.page;
            this.group_model.set_params({
              page: this.page
            });
            return this.group_model.lists.fetch();
          case "add":
            this.update_title("新增群組");
            if (!this.view_group_add) {
              this.view_group_add = new View({
                template_name: "group_edit",
                el: "#main"
              });
            }
            return this.view_group_add.render();
          case "edit":
            this.update_title("修改群組");
            if (!this.view_group) {
              this.view_group = new View({
                template_name: "group_edit",
                el: "#main",
                model: this.group_model
              });
            } else {
              if (!this.group_model.hasChanged()) {
                this.group_model.trigger("change");
              }
            }
            this.group_model.id = id;
            return this.group_model.fetch();
        }
      },
      privilege: function(action, id) {
        RT.dialogs.loading("open");
        $("#main").html("");
        switch (action) {
          case "list":
            this.page = id || 1;
            this.update_title("權限列表");
            if (!this.view_privilege_list) {
              this.view_privilege_list = new ViewPrivilegesList({
                el: "#main",
                collection: this.privilege_model.lists,
                page: this.page
              });
            }
            this.view_privilege_list.options.page = this.page;
            this.privilege_model.set_params({
              page: this.page
            });
            return this.privilege_model.lists.fetch();
          case "add":
            this.update_title("新增權限");
            if (!this.view_privilege_add) {
              this.view_privilege_add = new View({
                template_name: "privilege_edit",
                el: "#main",
                model: this.privilege_model
              });
            } else {
              if (!this.privilege_model.hasChanged()) {
                this.privilege_model.trigger("change");
              }
            }
            return this.privilege_model.fetch();
        }
      },
      log: function(action, id) {
        RT.dialogs.loading("open");
        $("#main").html("");
        switch (action) {
          case "list":
            this.page = id || 1;
            this.update_title("前端錯誤列表");
            if (!this.view_log_list) {
              this.view_log_list = new ViewLogsList({
                el: "#main",
                collection: this.log_model.lists,
                model_name: this.log_model,
                page: this.page
              });
            }
            this.view_log_list.options.page = this.page;
            this.log_model.set_params({
              page: this.page
            });
            return this.log_model.lists.fetch();
        }
      },
      update_user: function() {
        new View({
          template_name: "user_me",
          el: "#display_username",
          model: this.me
        }).render();
        if (this.me.get("logged_in" && $.inArray('Admin', this.me.get("user_groups")) !== '-1')) {
          window.location.href = '../app/main/index.html';
        }
        if (!this.me.get("logged_in")) {
          return $("#login_pannel").modal({
            backdrop: "static",
            keyboard: false
          });
        }
      },
      home: function() {
        this.update_title("管理首頁");
        return RT.dialogs.loading("close");
      },
      reset: function() {
        if (typeof this.user !== "undefined" && typeof this.user.reset !== "undefined") {
          this.user.reset();
        }
        if (typeof this.websync !== "undefined" && typeof this.websync.reset !== "undefined") {
          return this.websync.reset();
        }
      }
    });
    initialize = function() {
      var enablePushState, pushState;
      $(document).on("click", ".navigate_menu", function(ev) {
        var url;
        ev.preventDefault();
        url = '!/' + $(this).data('url');
        return RT.Router.navigate(url, {
          trigger: true
        });
      }).on("mouseenter", ".privilege", function(ev) {
        var action, id;
        ev.preventDefault();
        id = $(this).data("id");
        action = $(this).data("action");
        if (action === "deny") {
          $(this).removeClass("btn-danger").addClass("btn-primary");
          return $(this).text("允許");
        } else {
          $(this).removeClass("btn-primary").addClass("btn-danger");
          return $(this).text("禁止");
        }
      }).on("mouseleave", ".privilege", function(ev) {
        var action, id;
        ev.preventDefault();
        id = $(this).data("id");
        action = $(this).data("action");
        if (action === "deny") {
          $(this).removeClass("btn-primary").addClass("btn-danger");
          return $(this).text("禁止");
        } else {
          $(this).removeClass("btn-danger").addClass("btn-primary");
          return $(this).text("允許");
        }
      }).on("click", ".privilege", function(ev) {
        var current_action, form_id, form_info, id, priview_action;
        ev.preventDefault();
        id = $(this).data("id");
        priview_action = $(this).data("action");
        current_action = (priview_action === "deny" ? "allow" : "deny");
        form_info = {
          id: id,
          action: current_action
        };
        form_id = $(this).data("form");
        if (priview_action === "deny") {
          $(this).data("action", "allow");
        } else {
          $(this).data("action", "deny");
        }
        return $.ajax({
          url: root_path + "WebAPI/index.php/API/Acl/UpdateAcl",
          dataType: "json",
          type: "POST",
          data: form_info,
          success: function(response) {
            if (response.error_text) {
              RT.show_message(form_id, "alert-error", "修改失敗");
              RT.dialogs.loading("close");
            }
            if (response.success_text) {
              return RT.show_message(form_id, "alert-success", "修改成功");
            }
          }
        });
      }).on("click", ".auto_generate", function(ev) {
        var name, random_serial;
        ev.preventDefault();
        name = $(this).data("field");
        random_serial = RT.generateSerial(32);
        return $(":input[name=" + name + "]").val(random_serial);
      }).on("click", ".close", function(ev) {
        ev.preventDefault();
        return $(this).parent().fadeOut("slow");
      }).on("click", ".toggle > li > a", function(ev) {}).on("click", ".check_all", function(ev) {
        ev.preventDefault();
        return $("input[type=checkbox]").each(function() {
          var checked;
          checked = $(this).attr("checked");
          if (checked) {
            return $(this).attr("checked", false);
          } else {
            return $(this).attr("checked", true);
          }
        });
      });
      $("#websync_user_add_form").on("submit", function(ev) {
        var model, name, websync_user_info;
        ev.preventDefault();
        model = $(this).data("model");
        switch (model) {
          case "websync_user":
            websync_user_info = $("#websync_user_add_form").serializeObject();
            if (!$.trim(websync_user_info.websync_id) || !$.trim(websync_user_info.password)) {
              for (name in websync_user_info) {
                if (!$.trim(websync_user_info[name])) {
                  $("#websync_user_add_form input[name=" + name + "]").parent().addClass("error");
                  $("#websync_user_add_form input[name=" + name + "]").parent().find(".help-inline").text("此欄位務必填寫");
                }
              }
              return false;
            }
        }
      });
      $(".tablesorter").tablesorter({
        headers: {
          0: {
            sorter: false
          }
        }
      });
      $(".tab_content").hide();
      $("ul.tabs li:first").addClass("active").show();
      $(".tab_content:first").show();
      $("ul.tabs li").click(function() {
        var activeTab;
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
      });
      $(".tablesorter").tablesorter({
        headers: {
          0: {
            sorter: false
          }
        }
      });
      $(".column").equalHeight();
      RT.Router = new AppRouter;
      enablePushState = true;
      pushState = !!(enablePushState && window.history && window.history.pushState);
      return Backbone.history.start();
    };
    return {
      initialize: initialize
    };
  });
