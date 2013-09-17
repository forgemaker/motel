define ["jquery", "underscore", "backbone", "views/view", "alertify"], ($, _, Backbone, View, alertify) ->
    View.extend
        events: _.extend
            "click #rank_add_form .save": "save"
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
                    window.location = "#!/rank/list/" + form_info.motel_id
            e.stopImmediatePropagation()
            this

        render: ->
            parent_view = this
            data = @options.data or {}
            $(parent_view.el).empty()
            parent_view.model.attributes["rank_" + parent_view.model.attributes["rank"]] = true
            $.extend data, parent_view.model.attributes
            $(parent_view.el).hide().html(Handlebars.templates.rank_edit(data)).fadeIn "slow"
            this
