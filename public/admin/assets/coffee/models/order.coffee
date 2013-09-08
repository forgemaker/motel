define ["jquery", "underscore", "backbone", "collections/orders", "config"], ($, _, Backbone, CollectionOrders, Config) ->
    Backbone.Model.extend
        initialize: ->
            @lists = new CollectionOrders()
            @lists.url = Config.API.Order

        set_lists_url: (motel_id) ->
            @lists.url = Config.API.Order + "/list/" + motel_id

        url: ->
            Config.API.Order + "/" + @id + "/edit"

        parse: (response) ->
            $.extend response.item,
                is_edit: true

            response.item
