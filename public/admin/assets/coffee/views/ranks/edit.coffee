define ["jquery", "underscore", "backbone", "views/view"], ($, _, Backbone, View) ->
    View.extend render: ->
        parent_view = this
        data = @options.data or {}
        $(parent_view.el).empty()
        parent_view.model.attributes["rank_" + parent_view.model.attributes["rank"]] = true
        $.extend data, parent_view.model.attributes
        $(parent_view.el).hide().html(Handlebars.templates.rank_edit(data)).fadeIn "slow"
        this
