define ["jquery", "underscore", "backbone", "views/view", "alertify"], ($, _, Backbone, View, alertify) ->
    View.extend
        events: _.extend
            "click #new_add_form .save": "save"
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
                    window.location = "#!/new/list/" + form_info.motel_id
            this

        render: ->
            parent_view = this
            data = @options.data or {}
            $(parent_view.el).empty()
            $.extend data, parent_view.model.attributes
            $(parent_view.el).hide().html(Handlebars.templates.new_edit(data)).fadeIn "slow"
            $('#start_time, #end_time').datepicker
                dateFormat: 'yy-mm-dd'
            this
