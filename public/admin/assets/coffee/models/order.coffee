define ["jquery", "underscore", "backbone", "collections/orders", "config", "alertify"], ($, _, Backbone, CollectionOrders, Config, alertify) ->
    Backbone.Model.extend
        urlRoot: Config.API.Order

        initialize: ->
            @lists = new CollectionOrders()
            @lists.url = Config.API.Order
            @on "invalid", (model, error) ->
                alertify.error error

        stream: (options = {}) ->
            # Cancel any potential previous stream
            this.unstream();

            _update = _.bind(() ->
                this.lists.fetch
                    reset: true
                this._intervalFetch = window.setTimeout(_update, options.interval || 5000)
            , this)

            _update()

        unstream: () ->
            if this._intervalFetch
                window.clearTimeout(this._intervalFetch)
                delete this._intervalFetch

        isStreaming : () ->
             !_.isUndefined(this._intervalFetch)

        validate: (attributes) ->
            if attributes.uid is ''
                $("input[name=uid]").parent().addClass "has-error"
                return '手機編號必須填寫'
            if attributes.user_name is ''
                $("input[name=user_name]").parent().addClass "has-error"
                return '姓名必須填寫'
            if attributes.user_phone is ''
                $("input[name=user_phone]").parent().addClass "has-error"
                return '手機必須填寫'
            if attributes.status_id is ''
                $("input[name=status_id]").parent().addClass "has-error"
                return '狀態必須填寫'

        set_lists_url: (motel_id, params) ->
            query_string = if (params) then $.param(params) else ''
            @lists.url = Config.API.Order + "/list/" + motel_id + "?" + query_string

        parse: (response) ->
            return false if !response.item
            $.extend response.item,
                is_edit: true

            response.item
