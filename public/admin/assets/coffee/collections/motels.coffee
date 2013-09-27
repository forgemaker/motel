define ["jquery", "underscore", "backbone"], ($, _, Backbone) ->
    Backbone.Collection.extend parse: (response) ->
        this.total_counts = response.total_counts
        this.total_pages = response.total_pages
        response.items
