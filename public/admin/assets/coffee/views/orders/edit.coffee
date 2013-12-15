define ["jquery", "underscore", "backbone", "views/view", "alertify", "sockieio"], ($, _, Backbone, View, alertify) ->
    View.extend
        events: _.extend
            "click #order_add_form .save": "save"
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
                    window.location = "#!/order/list/" + form_info.motel_id
                    # send message to anther via socket.io
                    @socket = io.connect('http://' + window.location.hostname + ':3000');
                    @socket.emit('get order data', form_info)
            this

        render: ->
            parent_view = this
            data = @options.data or {}
            $(parent_view.el).empty()
            parent_view.model.attributes["type"] = +parent_view.model.attributes["type"]
            $.extend data, parent_view.model.attributes
            $(parent_view.el).hide().html(Handlebars.templates.order_edit(data)).fadeIn "slow"
            $('#date_purchased, #date_finished').datetimepicker
                timeFormat: 'HH:mm:ss'
                dateFormat: 'yy-mm-dd'
            this
