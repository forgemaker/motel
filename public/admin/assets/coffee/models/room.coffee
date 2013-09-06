define ["jquery", "underscore", "backbone", "collections/rooms", "config"], ($, _, Backbone, CollectionRooms, Config) ->
    Backbone.Model.extend
        initialize: ->
            @lists = new CollectionRooms()
            @lists.url = Config.API.Room

        set_lists_url: (motel_id) ->
            @lists.url = Config.API.Room + "/list/" + motel_id

        url: ->
            Config.API.Room + "/" + @id + "/edit"

        parse: (response) ->
            $.extend response.item,
                is_edit: true
                is_image: (if (response.item.raw_name isnt "") then true else false)

            response.item
