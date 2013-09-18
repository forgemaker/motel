define ["jquery", "underscore", "backbone", "alertify", "views/view"], ($, _, Backbone, alertify, View) ->

    View.extend
        events: _.extend
            "click #motel_add_form .save": "save"
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
                    window.location = "#!/motel/list"
            this

        render: () ->
            parent_view = this
            data = @options.data or {}
            $(parent_view.el).empty()
            $.extend data, parent_view.model.attributes
            $(parent_view.el).hide().html(Handlebars.templates.motel_edit(data)).fadeIn "slow"
            $("#twzipcode").twzipcode
                readonly: true
                countySel: data.county
                districtSel: data.district

            $("#contract_start, #contract_end").datepicker dateFormat: "yy-mm-dd"
            $("#stay_time_1, #stay_time_2").timepicker()
            this
