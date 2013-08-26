define ["jquery", "underscore", "backbone", "collections/ranks"], ($, _, Backbone, CollectionRanks) ->
    Backbone.Model.extend
        initialize: ->
            @lists = new CollectionRanks()
            @lists.url = RT.API.Rank

        set_lists_url: (motel_id) ->
            @lists.url = RT.API.Rank + "/list/" + motel_id

        url: ->
            RT.API.Rank + "/" + @id + "/edit"

        parse: (response) ->
            $.extend response.item,
                is_edit: true

            response.item
