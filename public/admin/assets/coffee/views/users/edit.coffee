define ["jquery", "underscore", "backbone", "views/view"], ($, _, Backbone, View) ->
    View.extend render: ->
        console.log 'render user edit'
        parent_view = this
        data = @options.data or {}
        $(parent_view.el).empty()
        Handlebars.registerHelper "group_active", (value) ->
            if +value is 1 then "checked" else ""

        $.extend data, parent_view.model.attributes
        $(parent_view.el).hide().html(Handlebars.templates.user_edit(data)).fadeIn "slow"
        RT.dialogs.loading "close"
        this
