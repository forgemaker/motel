define ["jquery", "underscore", "backbone", "views/view", "alertify", "config"], ($, _, Backbone, View, alertify, Config) ->
    View.extend
        events: _.extend
            "click #room_add_form .save": "save"
        , View::events

        save: (e) ->
            e.preventDefault()
            $(".form-group").removeClass "has-error"
            form_id = $(e.currentTarget).data("form")
            form_info = $(form_id).serializeObject()
            message = $(e.currentTarget).data("message")

            @model.set form_info, silent: true
            @model.save form_info,
                success: (model, response, options) ->
                    alertify.success message + "成功"
                    window.location = "#!/room/list/" + form_info.motel_id
            this

        render: () ->
            parent_view = this
            data = @options.data or {}
            $(parent_view.el).empty()
            $.extend data, parent_view.model.attributes
            if parent_view.model.get('raw_name') and parent_view.model.get('raw_name') != ''
                data.raw_name = $.parseJSON parent_view.model.get('raw_name')
                data.prefix = Config.Upload.path
                data.is_image = true
            $(parent_view.el).hide().html(Handlebars.templates.room_edit(data)).fadeIn "slow"
            $('#fileupload').fileupload
                url: Config.API.Upload
                dataType: 'json'
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
                # 5MB
                maxFileSize: 5000000
                done: (e, data) ->
                    if !data.result.file_name or data.result.file_name is ''
                        alertify.error 'Fail to upload file.'
                        return
                    image_url = window.location.protocol + '//' + window.location.hostname +  '/uploads/' + data.result.file_name
                    $('#upload_area').append '<div style="float:left; margin: 5px;"><img src="'+image_url+'" class="img-rounded" style="width: 200px; height: 200px;"><input type="hidden" name="raw_name[]" value="'+data.result.file_name+'" /></div>'
                    $('#progress').hide 'slow', () ->
                        $(this).find('.progress-bar').css 'width', '0%'
                progressall: (e, data) ->
                    $('#progress').removeClass('hide').show()
                    progress = parseInt data.loaded / data.total * 100, 10
                    $('#progress .progress-bar').css 'width', progress + '%'
                processalways: (e, data) ->
                    if (data.files[data.index].error)
                        alertify.error data.files[data.index].error
                fail: (e, data) ->
                    alertify.error '檔案上傳失敗'
            this
