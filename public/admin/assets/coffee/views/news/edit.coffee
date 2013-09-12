define ["jquery", "underscore", "backbone", "views/view"], ($, _, Backbone, View) ->
    View.extend render: ->
        parent_view = this
        data = @options.data or {}
        $(parent_view.el).empty()
        $.extend data, parent_view.model.attributes
        $(parent_view.el).hide().html(Handlebars.templates.new_edit(data)).fadeIn "slow"
        this
