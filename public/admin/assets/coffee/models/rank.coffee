define ["jquery", "underscore", "backbone", "collections/ranks", "config"], ($, _, Backbone, CollectionRanks, Config) ->
    Backbone.Model.extend
        initialize: ->
            @lists = new CollectionRanks()
            @lists.url = Config.API.Rank

        set_lists_url: (motel_id) ->
            @lists.url = Config.API.Rank + "/list/" + motel_id

        url: ->
            Config.API.Rank + "/" + @id + "/edit"

        parse: (response) ->
            $.extend response.item,
                is_edit: true

            response.item
