define ["jquery", "underscore", "backbone"], ($, _, Backbone) ->
    Backbone.Collection.extend parse: (response) ->
        response.items
