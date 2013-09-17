define ["jquery", "underscore", "backbone", "collections/orders", "config", "alertify"], ($, _, Backbone, CollectionOrders, Config, alertify) ->
    Backbone.Model.extend
        urlRoot: Config.API.Order

        initialize: ->
            @lists = new CollectionOrders()
            @lists.url = Config.API.Order
            @on "invalid", (model, error) ->
                alertify.error error

        validate: (attributes) ->
            if attributes.uid is ''
                $("input[name=uid]").parent().addClass "has-error"
                return '手機編號必須填寫'
            if attributes.serial_number is ''
                $("input[name=serial_number]").parent().addClass "has-error"
                return '訂單編號必須填寫'
            if attributes.user_name is ''
                $("input[name=user_name]").parent().addClass "has-error"
                return '姓名必須填寫'
            if attributes.user_phone is ''
                $("input[name=user_phone]").parent().addClass "has-error"
                return '手機必須填寫'
            if attributes.status_id is ''
                $("input[name=status_id]").parent().addClass "has-error"
                return '狀態必須填寫'

        set_lists_url: (motel_id) ->
            @lists.url = Config.API.Order + "/list/" + motel_id

        parse: (response) ->
            return false if !response.item
            $.extend response.item,
                is_edit: true

            response.item
