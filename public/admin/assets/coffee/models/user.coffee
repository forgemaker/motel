define ["jquery", "underscore", "backbone", "collections/users", "config"], ($, _, Backbone, CollectionUsers, Config) ->
    Backbone.Model.extend
        initialize: ->
            @lists = new CollectionUsers()
            @lists.url = Config.API.User

        set_params: (params) ->
            @lists.url = Config.API.User + "?" + $.param(params)

        url: ->
            Config.API.User + "/" + @id + "/edit"

        parse: (response) ->
            $.extend response.item,
                is_edit: true

            response.item
