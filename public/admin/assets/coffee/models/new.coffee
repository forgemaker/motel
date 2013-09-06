define ["jquery", "underscore", "backbone", "collections/news", "config"], ($, _, Backbone, CollectionNews, Config) ->
    Backbone.Model.extend
        initialize: ->
            @lists = new CollectionNews()
            @lists.url = Config.API.New

        set_lists_url: (motel_id) ->
            @lists.url = Config.API.New + "/list/" + motel_id

        url: ->
            Config.API.New + "/" + @id + "/edit"

        parse: (response) ->
            $.extend response.item,
                is_edit: true
                is_image: (if (response.item.raw_name isnt "") then true else false)

            response.item
