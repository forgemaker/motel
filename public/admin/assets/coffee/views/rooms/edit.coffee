define ["jquery", "underscore", "backbone", "views/view"], ($, _, Backbone, View) ->
    View.extend render: ->
        parent_view = this
        data = @options.data or {}
        $(parent_view.el).empty()
        parent_view.model.attributes["type"] = +parent_view.model.attributes["type"]
        $.extend data, parent_view.model.attributes
        $(parent_view.el).hide().html(Handlebars.templates.room_edit(data)).fadeIn "slow"
        RT.dialogs.loading "close"
        this
