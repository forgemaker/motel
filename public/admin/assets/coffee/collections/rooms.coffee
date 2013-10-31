define ["jquery", "underscore", "backbone"], ($, _, Backbone) ->
    Backbone.Collection.extend parse: (response) ->
        this.is_weekend = +response.is_weekend
        this.motel_id = response.motel_id
        this.total_pages = response.total_pages
        response.items
