define ["jquery", "underscore", "backbone", "collections/motels"], ($, _, Backbone, CollectionMotels) ->
    Backbone.Model.extend
        initialize: ->
            @lists = new CollectionMotels()
            @lists.url = RT.API.Motel

        set_params: (params) ->
            @lists.url = RT.API.Motel + "?" + $.param(params)

        url: ->
            RT.API.Motel + "/" + @id + "/edit"

        parse: (response) ->
            $.extend response.item,
                is_edit: true
                is_image: (if (response.item.raw_name isnt "") then true else false)

            response.item
