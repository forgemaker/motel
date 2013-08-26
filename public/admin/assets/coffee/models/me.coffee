define ["jquery", "underscore", "backbone"], ($, _, Backbone) ->
    RT.ModelMe = Backbone.Model.extend(
        url: ->
            RT.API.me

        parse: (response) ->
            @user_id = response.item.user_id
            response.item
    )
    RT.ModelMe
