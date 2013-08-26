define ["jquery", "underscore", "backbone", "collections/users"], ($, _, Backbone, CollectionUsers) ->
    Backbone.Model.extend
        initialize: ->
            @lists = new CollectionUsers()
            @lists.url = RT.API.User

        set_params: (params) ->
            @lists.url = RT.API.User + "?" + $.param(params)

        url: ->
            RT.API.User + "/" + @id + "/edit"

        parse: (response) ->
            $.extend response.item,
                is_edit: true

            response.item
