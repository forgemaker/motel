String.prototype.ucFirst = function() {
  return this.substring(0, 1).toUpperCase() + this.substring(1).toLowerCase();
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
  if (message === "" || id === undefined) {
    return false;
  }
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

define(["jquery", "underscore", "backbone", "config", 'alertify', "models/me", "models/user", "models/motel", "models/room", "models/new", "models/rank", "models/order", "views/view", "views/users/list", "views/users/edit", "views/motels/list", "views/motels/edit", "views/rooms/list", "views/rooms/edit", "views/news/list", "views/news/edit", "views/ranks/list", "views/ranks/edit", "views/orders/list", "views/orders/edit", "moment", "jquery.twzipcode", "jquery.serialize", "jquery.tablesorter", "jquery.ui.datepicker", "jquery.ui.timepicker", "bootstrap.modal", "bootstrap.tab", "jquery.equalHeight", "handlebars", "libs/handlebars-helper", 'jquery.ui.widget', 'jquery.iframe-transport', 'jquery.fileupload', 'jquery.fileupload-process', 'jquery.fileupload-validate', "templates"], function($, _, Backbone, Config, alertify, ModelMe, ModelUser, ModelMotel, ModelRoom, ModelNew, ModelRank, ModelOrder, View, ViewUsers, ViewUser, ViewMotels, ViewMotel, ViewRooms, ViewRoom, ViewNews, ViewNew, ViewRanks, ViewRank, ViewOrders, ViewOrder) {
  var AppRouter, ajaxSettings, api_req, initialize;
  $.ajaxSetup({
    cache: false
  });
  ajaxSettings = {
    dataType: "json"
  };
  api_req = function(name, callback, settings) {
    settings = (!settings ? {} : settings);
    return $.ajax($.extend({}, ajaxSettings, {
      url: name,
      type: (settings.data ? "POST" : "GET"),
      beforeSend: function(jqXHR, settings) {
        return RT.dialogs.loading("open");
      },
      complete: function(jqXHR, textStatus) {
        return RT.dialogs.loading("close");
      },
      success: callback,
      error: function(xhr, status, errorThrown) {
        var error, message;
        message = "Unknown error. Please try again later.";
        switch (status) {
          case "timeout":
            message = "Server timeout. Please try again later.";
            break;
          case "error":
          case "parsererror":
            message = "Server experienced some difficulty. Please try again later.";
            break;
          case "abort":
            message = "Aborted.";
        }
        try {
          return alertify.error($.parseJSON(xhr.responseText).error_text);
        } catch (_error) {
          error = _error;
          return alertify.error(message);
        }
      }
    }, settings));
  };
  RT.API = {
    GET: function(path, data, callback, settings) {
      settings = settings || {};
      data = data || {};
      if (navigator.userAgent.indexOf("MSIE") !== -1) {
        $.extend(settings, {
          cache: false
        });
      }
      return api_req(path, callback, $.extend({
        type: "GET",
        data: data
      }, settings));
    },
    POST: function(path, data, callback, settings) {
      settings = settings || {};
      data = data || {};
      return api_req(path, callback, $.extend({
        type: "POST",
        data: data
      }, settings));
    },
    PUT: function(path, data, callback, settings) {
      settings = settings || {};
      data = data || {};
      return api_req(path, callback, $.extend({
        type: "PUT",
        data: data
      }, settings));
    },
    DELETE: function(path, data, callback, settings) {
      settings = settings || {};
      data = data || {};
      return api_req(path, callback, $.extend({
        type: "DELETE",
        data: data
      }, settings));
    }
  };
  AppRouter = Backbone.Router.extend({
    site_name: "Motel 後台管理",
    routes: {
      "": "home",
      "!/home": "home",
      "!/motel/:action": "motel",
      "!/motel/:action/:id": "motel",
      "!/user/:action": "user",
      "!/user/:action/:id": "user",
      "!/room/:action": "room",
      "!/room/:action/:id": "room",
      "!/new/:action": "new",
      "!/new/:action/:id": "new",
      "!/rank/:action": "rank",
      "!/rank/:action/:id": "rank",
      "!/order/:action": "order",
      "!/order/:action/:id": "order"
    },
    initialize: function() {
      this.me = new ModelMe();
      this.me.on("change", this.update_user, this);
      this.me.fetch({
        async: false
      });
      this.motel = new ModelMotel();
      this.motel.on("change", this.update_motel, this);
      if (!this.user_model) {
        this.user_model = new ModelUser();
      }
      if (!this.motel_model) {
        this.motel_model = new ModelMotel();
      }
      if (!this.room_model) {
        this.room_model = new ModelRoom();
      }
      if (!this.new_model) {
        this.new_model = new ModelNew();
      }
      if (!this.rank_model) {
        this.rank_model = new ModelRank();
      }
      if (!this.order_model) {
        return this.order_model = new ModelOrder();
      }
    },
    redirect_url: {
      error: function(message, url) {
        alertify.error(message);
        window.location = url;
        return true;
      },
      success: function(message, url) {
        alertify.success(message);
        window.location = url;
        return true;
      }
    },
    auth_check: function() {
      if (!this.me.get('isAdmin')) {
        alertify.error("您並非系統管理者");
        window.location = "#!/user/edit";
        return true;
      }
      return false;
    },
    update_title: function(title) {
      if (title) {
        document.title = title + " | " + this.site_name;
        return $(".section_title").text(title);
      } else {
        document.title = this.site_name;
        return $(".section_title").text("");
      }
    },
    order: function(action, id) {
      var self;
      this.reset();
      RT.dialogs.loading("open");
      $("#main").html("");
      self = this;
      this.motel_id = id || this.me.get('motel_id');
      if (this.motel_id == null) {
        return this.redirect_url.error('尚未找到 Motel 相關資料', '#!/user/edit');
      }
      switch (action) {
        case "list":
          this.motel_id = id || 1;
          this.update_title("訂單列表");
          if (!this.view_orders_list) {
            this.view_orders_list = new ViewOrders({
              el: "#main",
              collection: this.order_model.lists,
              model_name: this.order_model
            });
          }
          this.view_orders_list.options.data = {
            motel_id: this.motel_id,
            isAdmin: this.me.get('isAdmin')
          };
          this.view_orders_list.options.page = this.page || 1;
          this.order_model.set_lists_url(this.motel_id);
          return this.order_model.lists.fetch({
            reset: true
          });
        case "add":
          this.update_title("新增訂單");
          if (!this.view_orders_add) {
            this.view_orders_add = new View({
              template_name: 'order_edit',
              el: "#main"
            });
          }
          this.view_orders_add.options.data = {
            motel_id: this.motel_id
          };
          this.view_orders_add.render();
          return $('#date_purchased, #date_finished').datetimepicker({
            timeFormat: 'HH:mm:ss',
            dateFormat: 'yy-mm-dd'
          });
        case "edit":
          this.update_title("修改訂單");
          if (!this.view_order) {
            this.view_order = new ViewOrder({
              el: "#main",
              model: this.order_model
            });
          }
          this.view_order.options.data = {
            motel_id: this.motel_id
          };
          this.order_model.id = id;
          return this.order_model.fetch({
            success: function(model, response, options) {
              if (!self.order_model.hasChanged('id')) {
                return self.order_model.trigger('change');
              }
            }
          });
      }
    },
    rank: function(action, id) {
      var self;
      this.reset();
      RT.dialogs.loading("open");
      $("#main").html("");
      self = this;
      this.motel_id = id || this.me.get('motel_id');
      if (this.motel_id == null) {
        return this.redirect_url.error('尚未找到 Motel 相關資料', '#!/user/edit');
      }
      switch (action) {
        case "list":
          this.motel_id = id || 1;
          this.update_title("優惠列表");
          if (!this.view_ranks_list) {
            this.view_ranks_list = new ViewRanks({
              el: "#main",
              collection: this.rank_model.lists,
              model_name: this.rank_model
            });
          }
          this.view_ranks_list.options.data = {
            motel_id: this.motel_id,
            isAdmin: this.me.get('isAdmin')
          };
          this.view_ranks_list.options.page = this.page || 1;
          this.rank_model.set_lists_url(this.motel_id);
          return this.rank_model.lists.fetch({
            reset: true
          });
        case "add":
          this.update_title("新增優惠消息");
          if (!this.view_ranks_add) {
            this.view_ranks_add = new View({
              template_name: 'rank_edit',
              el: "#main"
            });
          }
          this.view_ranks_add.options.data = {
            motel_id: this.motel_id
          };
          return this.view_ranks_add.render();
        case "edit":
          this.update_title("修改優惠");
          if (!this.view_rank) {
            this.view_rank = new ViewRank({
              el: "#main",
              model: this.rank_model
            });
          }
          this.view_rank.options.data = {
            motel_id: this.motel_id
          };
          this.rank_model.id = id;
          return this.rank_model.fetch({
            success: function(model, response, options) {
              if (!self.rank_model.hasChanged('id')) {
                return self.rank_model.trigger('change');
              }
            }
          });
      }
    },
    "new": function(action, id) {
      var self;
      this.reset();
      RT.dialogs.loading("open");
      $("#main").html("");
      self = this;
      this.motel_id = id || this.me.get('motel_id');
      if (this.motel_id == null) {
        return this.redirect_url.error('尚未找到 Motel 相關資料', '#!/user/edit');
      }
      switch (action) {
        case "list":
          this.motel_id = id || 1;
          this.update_title("優惠列表");
          if (!this.view_news_list) {
            this.view_news_list = new ViewNews({
              el: "#main",
              collection: this.new_model.lists,
              model_name: this.new_model
            });
          }
          this.view_news_list.options.data = {
            motel_id: this.motel_id
          };
          this.view_news_list.options.page = this.page || 1;
          this.new_model.set_lists_url(this.motel_id);
          return this.new_model.lists.fetch({
            reset: true
          });
        case "add":
          this.update_title("新增優惠消息");
          if (!this.view_news_add) {
            this.view_news_add = new View({
              template_name: 'new_edit',
              el: "#main"
            });
          }
          this.view_news_add.options.data = {
            motel_id: this.motel_id
          };
          this.view_news_add.render();
          $('#start_time, #end_time').datepicker({
            dateFormat: 'yy-mm-dd'
          });
          return $('#fileupload').fileupload({
            url: Config.API.Upload,
            dataType: 'json',
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            maxFileSize: 5000000,
            done: function(e, data) {
              var image_url;
              if (!data.result.file_name) {
                alertify.error('Fail to upload file.');
                return;
              }
              image_url = window.location.protocol + '//' + window.location.hostname + '/uploads/' + data.result.file_name;
              $('#upload_area').html('<img src="' + image_url + '" class="img-rounded" style="width: 400px; height: 200px;">');
              $('#image_url').val(image_url);
              $('#raw_name').val(data.result.file_name);
              return $('#progress').hide('slow', function() {
                return $(this).find('.progress-bar').css('width', '0%');
              });
            },
            progressall: function(e, data) {
              var progress;
              $('#progress').removeClass('hide').show();
              progress = parseInt(data.loaded / data.total * 100, 10);
              return $('#progress .progress-bar').css('width', progress + '%');
            },
            processalways: function(e, data) {
              if (data.files[data.index].error) {
                return alertify.error(data.files[data.index].error);
              }
            },
            fail: function(e, data) {
              return alertify.error('檔案上傳失敗');
            }
          });
        case "edit":
          this.update_title("修改優惠");
          if (!this.view_new) {
            this.view_new = new ViewNew({
              el: "#main",
              model: this.new_model
            });
          }
          this.view_new.options.data = {
            motel_id: this.motel_id
          };
          this.new_model.id = id;
          return this.new_model.fetch({
            success: function(model, response, options) {
              if (!self.new_model.hasChanged('id')) {
                self.new_model.trigger('change');
              }
              return setTimeout(function() {
                $('#start_time, #end_time').datepicker({
                  dateFormat: 'yy-mm-dd'
                });
                return $('#fileupload').fileupload({
                  url: Config.API.Upload,
                  dataType: 'json',
                  acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
                  maxFileSize: 5000000,
                  done: function(e, data) {
                    var image_url;
                    if (!data.result.file_name) {
                      alertify.error('Fail to upload file.');
                      return;
                    }
                    image_url = window.location.protocol + '//' + window.location.hostname + '/uploads/' + data.result.file_name;
                    $('#upload_area').html('<img src="' + image_url + '" class="img-rounded" style="width: 400px; height: 200px;">');
                    $('#image_url').val(image_url);
                    $('#raw_name').val(data.result.file_name);
                    return $('#progress').hide('slow', function() {
                      return $(this).find('.progress-bar').css('width', '0%');
                    });
                  },
                  progressall: function(e, data) {
                    var progress;
                    $('#progress').removeClass('hide').show();
                    progress = parseInt(data.loaded / data.total * 100, 10);
                    return $('#progress .progress-bar').css('width', progress + '%');
                  },
                  processalways: function(e, data) {
                    if (data.files[data.index].error) {
                      return alertify.error(data.files[data.index].error);
                    }
                  },
                  fail: function(e, data) {
                    return alertify.error('檔案上傳失敗');
                  }
                });
              }, 2000);
            }
          });
      }
    },
    room: function(action, id) {
      var self;
      this.reset();
      RT.dialogs.loading("open");
      $("#main").html("");
      self = this;
      this.motel_id = id || this.me.get('motel_id');
      if (this.motel_id == null) {
        return this.redirect_url.error('尚未找到 Motel 相關資料', '#!/user/edit');
      }
      switch (action) {
        case "list":
          this.update_title("房型列表");
          if (!this.view_rooms_list) {
            this.view_rooms_list = new ViewRooms({
              el: "#main",
              collection: this.room_model.lists,
              model_name: this.room_model
            });
          }
          this.view_rooms_list.options.data = {
            motel_id: this.motel_id
          };
          this.view_rooms_list.options.page = this.page || 1;
          this.room_model.set_lists_url(this.motel_id);
          return this.room_model.lists.fetch({
            reset: true
          });
        case "add":
          this.update_title("新增房型");
          if (!this.view_rooms_add) {
            this.view_rooms_add = new View({
              template_name: "room_edit",
              el: "#main"
            });
          }
          this.view_rooms_add.options.data = {
            motel_id: this.motel_id
          };
          this.view_rooms_add.render();
          return $('#fileupload').fileupload({
            url: Config.API.Upload,
            dataType: 'json',
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            maxFileSize: 5000000,
            done: function(e, data) {
              var image_url;
              if (!data.result.file_name) {
                alertify.error('Fail to upload file.');
                return;
              }
              image_url = window.location.protocol + '//' + window.location.hostname + '/uploads/' + data.result.file_name;
              $('#upload_area').html('<img src="' + image_url + '" class="img-rounded" style="width: 400px; height: 200px;">');
              $('#image_url').val(image_url);
              $('#raw_name').val(data.result.file_name);
              return $('#progress').hide('slow', function() {
                return $(this).find('.progress-bar').css('width', '0%');
              });
            },
            progressall: function(e, data) {
              var progress;
              $('#progress').removeClass('hide').show();
              progress = parseInt(data.loaded / data.total * 100, 10);
              return $('#progress .progress-bar').css('width', progress + '%');
            },
            processalways: function(e, data) {
              if (data.files[data.index].error) {
                return alertify.error(data.files[data.index].error);
              }
            },
            fail: function(e, data) {
              return alertify.error('檔案上傳失敗');
            }
          });
        case "edit":
          this.update_title("修改房型");
          if (!this.view_room) {
            this.view_room = new ViewRoom({
              el: "#main",
              model: this.room_model
            });
          }
          this.view_room.options.data = {
            motel_id: this.motel_id
          };
          this.room_model.id = id;
          return this.room_model.fetch({
            success: function(model, response, options) {
              if (!self.room_model.hasChanged('id')) {
                self.room_model.trigger('change');
              }
              return setTimeout(function() {
                return $('#fileupload').fileupload({
                  url: Config.API.Upload,
                  dataType: 'json',
                  acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
                  maxFileSize: 5000000,
                  done: function(e, data) {
                    var image_url;
                    if (!data.result.file_name) {
                      alertify.error('Fail to upload file.');
                      return;
                    }
                    image_url = window.location.protocol + '//' + window.location.hostname + '/uploads/' + data.result.file_name;
                    $('#upload_area').html('<img src="' + image_url + '" class="img-rounded" style="width: 400px; height: 200px;">');
                    $('#image_url').val(image_url);
                    $('#raw_name').val(data.result.file_name);
                    return $('#progress').hide('slow', function() {
                      return $(this).find('.progress-bar').css('width', '0%');
                    });
                  },
                  progressall: function(e, data) {
                    var progress;
                    $('#progress').removeClass('hide').show();
                    progress = parseInt(data.loaded / data.total * 100, 10);
                    return $('#progress .progress-bar').css('width', progress + '%');
                  },
                  processalways: function(e, data) {
                    if (data.files[data.index].error) {
                      return alertify.error(data.files[data.index].error);
                    }
                  },
                  fail: function(e, data) {
                    return alertify.error('檔案上傳失敗');
                  }
                });
              }, 2000);
            }
          });
      }
    },
    user: function(action, id) {
      var self;
      this.reset();
      RT.dialogs.loading("open");
      $("#main").html("");
      self = this;
      switch (action) {
        case "logout":
          return RT.API.GET(Config.API.User + '/logout', null, function(response) {
            if (response.error_text) {
              alertify.error("登出失敗");
            }
            if (response.success_text) {
              alertify.success("登出成功");
              return self.me.fetch();
            }
          });
        case "list":
          this.page = id || 1;
          this.update_title("帳號列表");
          if (this.auth_check()) {
            return;
          }
          if (!this.view_users_list) {
            this.view_users_list = new ViewUsers({
              el: "#main",
              collection: this.user_model.lists,
              model_name: this.user_model,
              page: this.page
            });
          }
          this.view_users_list.options.data = {
            isAdmin: this.me.get('isAdmin')
          };
          this.view_users_list.options.page = this.page;
          this.user_model.set_params({
            page: this.page
          });
          return this.user_model.lists.fetch({
            reset: true
          });
        case "add":
          this.update_title("新增帳號");
          if (this.auth_check()) {
            return;
          }
          if (!this.view_users_add) {
            this.view_users_add = new View({
              template_name: "user_edit",
              el: "#main"
            });
          }
          this.view_users_add.options.data = {
            isAdmin: this.me.get('isAdmin')
          };
          return this.view_users_add.render();
        case "edit":
          this.update_title("修改帳號");
          if (!this.view_user) {
            this.view_user = new ViewUser({
              el: "#main",
              model: this.user_model
            });
          }
          this.view_user.options.data = {
            isAdmin: this.me.get('isAdmin')
          };
          this.user_model.id = id || this.me.get('user_id');
          return this.user_model.fetch({
            success: function(model, response, options) {
              if (!self.user_model.hasChanged('id')) {
                return self.user_model.trigger('change');
              }
            }
          });
      }
    },
    motel: function(action, id) {
      var self;
      this.reset();
      RT.dialogs.loading("open");
      $("#main").html("");
      self = this;
      this.motel_id = id || this.me.get('motel_id');
      switch (action) {
        case "switch":
          if (!this.me.get('isAdmin' || (this.motel_id == null))) {
            return this.redirect_url.error('您並非管理者', '#!/user/edit');
          }
          this.motel.id = this.motel_id;
          this.motel.fetch();
          this.me.set('motel_id', this.motel_id);
          return this.redirect_url.success('成功切換權限', '#!/motel/edit');
        case "list":
          this.page = id || 1;
          this.update_title("摩鐵列表");
          if (this.auth_check()) {
            return;
          }
          if (!this.view_motels_list) {
            this.view_motels_list = new ViewMotels({
              el: "#main",
              collection: this.motel_model.lists,
              model_name: this.motel_model
            });
          }
          this.view_motels_list.options.data = {
            isAdmin: this.me.get('isAdmin')
          };
          this.view_motels_list.options.page = this.page;
          this.motel_model.set_params({
            page: this.page
          });
          return this.motel_model.lists.fetch({
            reset: true
          });
        case "add":
          this.update_title("新增摩鐵");
          if (this.auth_check()) {
            return;
          }
          if (!this.view_motels_add) {
            this.view_motels_add = new View({
              template_name: "motel_edit",
              el: "#main"
            });
          }
          this.view_motels_add.options.data = {
            isAdmin: this.me.get('isAdmin')
          };
          this.view_motels_add.render();
          $('#twzipcode').twzipcode({
            'readonly': true
          });
          $('#contract_start, #contract_end').datepicker({
            dateFormat: 'yy-mm-dd'
          });
          $('#stay_time_1, #stay_time_2').timepicker();
          return $('#fileupload').fileupload({
            url: Config.API.Upload,
            dataType: 'json',
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            maxFileSize: 5000000,
            done: function(e, data) {
              var image_url;
              if (!data.result.file_name) {
                alertify.error('Fail to upload file.');
                return;
              }
              image_url = window.location.protocol + '//' + window.location.hostname + '/uploads/' + data.result.file_name;
              $('#upload_area').html('<img src="' + image_url + '" class="img-rounded" style="width: 400px; height: 200px;">');
              $('#image_url').val(image_url);
              $('#raw_name').val(data.result.file_name);
              return $('#progress').hide('slow', function() {
                return $(this).find('.progress-bar').css('width', '0%');
              });
            },
            progressall: function(e, data) {
              var progress;
              $('#progress').removeClass('hide').show();
              progress = parseInt(data.loaded / data.total * 100, 10);
              return $('#progress .progress-bar').css('width', progress + '%');
            },
            processalways: function(e, data) {
              if (data.files[data.index].error) {
                return alertify.error(data.files[data.index].error);
              }
            },
            fail: function(e, data) {
              return alertify.error('檔案上傳失敗');
            }
          });
        case "edit":
          this.update_title("修改摩鐵");
          if (!this.view_motel) {
            this.view_motel = new ViewMotel({
              el: "#main",
              model: this.motel_model
            });
          }
          this.view_motel.options.data = {
            isAdmin: this.me.get('isAdmin')
          };
          if (this.motel_id == null) {
            return this.redirect_url.error('尚未找到 Motel 相關資料', '#!/user/edit');
          }
          this.motel_model.id = this.motel_id;
          return this.motel_model.fetch({
            success: function(model, response, options) {
              if (!self.motel_model.hasChanged('id')) {
                self.motel_model.trigger('change');
              }
              return setTimeout(function() {
                return $('#fileupload').fileupload({
                  url: Config.API.Upload,
                  dataType: 'json',
                  acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
                  maxFileSize: 5000000,
                  done: function(e, data) {
                    var image_url;
                    if (!data.result.file_name) {
                      alertify.error('Fail to upload file.');
                      return;
                    }
                    image_url = window.location.protocol + '//' + window.location.hostname + '/uploads/' + data.result.file_name;
                    $('#upload_area').html('<img src="' + image_url + '" class="img-rounded" style="width: 400px; height: 200px;">');
                    $('#image_url').val(image_url);
                    $('#raw_name').val(data.result.file_name);
                    return $('#progress').hide('slow', function() {
                      return $(this).find('.progress-bar').css('width', '0%');
                    });
                  },
                  progressall: function(e, data) {
                    var progress;
                    $('#progress').removeClass('hide').show();
                    progress = parseInt(data.loaded / data.total * 100, 10);
                    return $('#progress .progress-bar').css('width', progress + '%');
                  },
                  processalways: function(e, data) {
                    if (data.files[data.index].error) {
                      return alertify.error(data.files[data.index].error);
                    }
                  },
                  fail: function(e, data) {
                    return alertify.error('檔案上傳失敗');
                  }
                });
              }, 2000);
            }
          });
      }
    },
    update_motel: function() {
      return $('#motel_title').text(this.motel.get('title'));
    },
    update_user: function() {
      var isAdmin;
      new View({
        template_name: "user_me",
        el: "#display_username",
        model: this.me
      }).render();
      isAdmin = $.inArray('Admin', this.me.get("user_groups")) !== -1 ? true : false;
      this.me.set('isAdmin', isAdmin, {
        silent: true
      });
      if (isAdmin) {
        $('.admin-panel').removeClass('hide');
      } else {
        $('.admin-panel').addClass('hide');
      }
      if (!this.me.get("logged_in")) {
        return $("#login_pannel").modal({
          backdrop: "static",
          keyboard: false
        });
      }
    },
    home: function() {
      return RT.dialogs.loading("close");
    },
    reset: function() {
      if (typeof this.user !== "undefined" && typeof this.user.reset !== "undefined") {
        return this.user.reset();
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
    }).on("click", ".auto_generate", function(ev) {
      var name, random_serial;
      ev.preventDefault();
      name = $(this).data("field");
      random_serial = RT.generateSerial(32);
      return $(":input[name=" + name + "]").val(random_serial);
    }).on("click", ".close", function(ev) {
      ev.preventDefault();
      return $(this).parent().fadeOut("slow");
    }).on("click", ".check_all", function(ev) {
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
    }).on("click", "#login-button", function(ev) {
      var form_id, form_info;
      form_id = $(this).data("form");
      form_info = $(form_id).serializeObject();
      return RT.API.POST(Config.API.User + '/login', form_info, function(response) {
        if (response.error_text) {
          alertify.error("登入失敗");
        }
        if (response.success_text) {
          $('#password').val('');
          $("#login_pannel").modal('hide');
          RT.Router.me.fetch({
            async: false
          });
          window.location = "#!/user/edit";
          return alertify.success("登入成功");
        }
      });
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
