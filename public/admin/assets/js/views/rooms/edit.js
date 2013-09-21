define(["jquery", "underscore", "backbone", "views/view", "alertify", "config"], function($, _, Backbone, View, alertify, Config) {
  return View.extend({
    events: _.extend({
      "click #room_add_form .save": "save"
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
          return window.location = "#!/room/list/" + form_info.motel_id;
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
      $(parent_view.el).hide().html(Handlebars.templates.room_edit(data)).fadeIn("slow");
      $('#fileupload').fileupload({
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
      return this;
    }
  });
});
