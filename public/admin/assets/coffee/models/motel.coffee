define ["jquery", "underscore", "backbone", "collections/motels", "config"], ($, _, Backbone, CollectionMotels, Config) ->
    Backbone.Model.extend
        initialize: ->
            @lists = new CollectionMotels()
            @lists.url = Config.API.Motel

        set_params: (params) ->
            @lists.url = Config.API.Motel + "?" + $.param(params)

        url: ->
            Config.API.Motel + "/" + @id + "/edit"

        parse: (response) ->
            $.extend response.item,
                is_edit: true
                is_image: (if (response.item.raw_name isnt "") then true else false)

            response.item
