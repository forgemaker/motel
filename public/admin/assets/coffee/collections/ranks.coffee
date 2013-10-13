define ["jquery", "underscore", "backbone"], ($, _, Backbone) ->
    Backbone.Collection.extend parse: (response) ->
        this.total_pages = response.total_pages
        response.items
