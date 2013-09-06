define ["jquery", "underscore", "backbone", "config"], ($, _, Backbone, Config) ->
    Backbone.Model.extend
        url: Config.API.me
        parse: (response) ->
            @user_id = response.item.user_id
            response.item
