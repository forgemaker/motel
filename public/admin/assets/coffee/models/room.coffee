define ["jquery", "underscore", "backbone", "collections/rooms", "config", "alertify"], ($, _, Backbone, CollectionRooms, Config, alertify) ->
    Backbone.Model.extend
        urlRoot: Config.API.Room

        initialize: ->
            @lists = new CollectionRooms()
            @lists.url = Config.API.Room
            @on "invalid", (model, error) ->
                alertify.error error

        validate: (attributes) ->
            if attributes.title is ''
                $("input[name=title]").parent().addClass "has-error"
                return '房型名稱必須填寫'
            if attributes.price_1 is ''
                $("input[name=price_1]").parent().addClass "has-error"
                return '原價必須填寫'
            if attributes.price_2 is ''
                $("input[name=price_2]").parent().addClass "has-error"
                return '特價(平日)必須填寫'
            if attributes.price_3 is ''
                $("input[name=price_3]").parent().addClass "has-error"
                return '特價(平日)必須填寫'

        set_lists_url: (motel_id) ->
            @lists.url = Config.API.Room + "/list/" + motel_id

        parse: (response) ->
            return false if !response.item
            $.extend response.item,
                is_edit: true
                is_image: (if (response.item.raw_name isnt "") then true else false)

            response.item
