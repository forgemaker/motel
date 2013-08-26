define ["jquery", "underscore", "backbone", "collections/rooms"], ($, _, Backbone, CollectionRooms) ->
    Backbone.Model.extend
        initialize: ->
            @lists = new CollectionRooms()
            @lists.url = RT.API.Room

        set_lists_url: (motel_id) ->
            @lists.url = RT.API.Room + "/list/" + motel_id

        url: ->
            RT.API.Room + "/" + @id + "/edit"

        parse: (response) ->
            $.extend response.item,
                is_edit: true
                is_image: (if (response.item.raw_name isnt "") then true else false)

            response.item


