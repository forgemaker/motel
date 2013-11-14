define ["jquery", "underscore", "backbone", "alertify", "config"], ($, _, Backbone, alertify, Config) ->
    View = Backbone.View
    Backbone.View = View.extend
        constructor: (options) ->
            @options = options
            View.apply(this, arguments)

    Backbone.View.extend
        initialize: ->
            @model.on "change", @render, this if @model
            # listen model error handle
            @model.on "error", (model, xhr, options) ->
                alertify.error xhr.responseJSON.error_text
            , this if @model
            @collection.on "reset", @render, this if @collection
            @debug = false

        events:
            "click .delete": "delete_item"
            "click .delete_all": "delete_all"

        delete_item: (e) ->
            (@debug) and console.log "delete"
            e.preventDefault()
            id = $(e.currentTarget).data("id")
            type = $(e.currentTarget).data("model")
            api_url = Config.API[type.ucFirst()] + "/" + id
            if confirm("確定刪除此筆資料?")
                RT.API.DELETE api_url, null, (response) ->
                    if response.error_text
                        alertify.error "刪除失敗"
                    if response.success_text
                        alertify.success $(e.currentTarget).data("title") + " 已被刪除"
                        $(e.currentTarget).parent().parent().remove()

            # call return false or e.stopPropagation() or e.stopImmediatePropagation();
            e.stopImmediatePropagation()
            false

        delete_all: (e) ->
            (@debug) and console.log "delete all"
            e.preventDefault()
            form_id = $(e.currentTarget).data("form")
            form_info = $(form_id).serializeObject()
            type = $(e.currentTarget).data("model")
            length = $("input:checked").length
            api_url = Config.API[type.ucFirst()] + "/all"
            if length is 0
                alertify.error "尚未選取任何項目"
                e.stopImmediatePropagation()
                return false
            if confirm("確定刪除選取資料?")
                RT.API.DELETE api_url, form_info, (response) ->
                    if response.error_text
                        alertify.error "刪除失敗"
                    if response.success_text
                        alertify.success "刪除成功"
                        $("input:checked").each ->
                            $(this).parent().parent().remove()

            # call return false or e.stopPropagation() or e.stopImmediatePropagation();
            e.stopImmediatePropagation()
            false

        handlebars: ->
            $("body").append @el    unless @options.el
            template_name = @options.template_name or @template_name
            data = @options.data or {}
            is_table = @options.is_table or false
            is_append = @options.is_append or false
            display = (if (@options.display is false) then false else true)
            unless template_name
                console.log "Error: Could not find template"
                return
            if @model and @collection
                console.log "Both model and collection provided. Please override render() or mustache()"
            else if @model
                $.extend @model.attributes, data
                if is_append
                    $(@el).append Handlebars.templates[template_name](@model.attributes)
                else
                    $(@el).html Handlebars.templates[template_name](@model.attributes)
            else if @collection
                $(@el).empty()
                parent_view = this
                @collection.each (item) ->
                    child_view = new View(
                        tagName: (if (is_table) then "tr" else "")
                        template_name: template_name
                        model: item
                    )
                    $(parent_view.el).append child_view.render().el

            else
                $(@el).hide().html Handlebars.templates[template_name](data)
            RT.update_table()    if is_table
            @$el.fadeIn "slow"    if display
            this

        render: ->
            @handlebars()

