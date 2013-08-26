define ["jquery", "underscore", "backbone", "collections/news"], ($, _, Backbone, CollectionNews) ->
    Backbone.Model.extend
        initialize: ->
            @lists = new CollectionNews()
            @lists.url = RT.API.New

        set_lists_url: (motel_id) ->
            @lists.url = RT.API.New + "/list/" + motel_id

        url: ->
            RT.API.New + "/" + @id + "/edit"

        parse: (response) ->
            $.extend response.item,
                is_edit: true
                is_image: (if (response.item.raw_name isnt "") then true else false)

            response.item
