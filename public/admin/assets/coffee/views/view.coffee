#
# * The main portion of a page
# *
# * Each RT.View should define the following properties:
# *     el: a CSS path or the parent element
# *     template_name: the data-id of the Mustache template to use for displaying the model or collection
# * Each RT.View should also specify one of the following for default rendering:
# *     model: a single object that the view will display using the template
# *     collection: a set of objects, each of which will be displayed using the template
#

define ["jquery", "underscore", "backbone", "alertify", "config"], ($, _, Backbone, alertify, Config) ->
    Backbone.View.extend
        initialize: ->
            @model.on "change", @render, this if @model
            @collection.on "reset", @render, this if @collection
            @debug = true

        events:
            "click .add": "add"
            "click .edit": "edit"
            "click .delete": "delete_item"
            "click .delete_all": "delete_all"

        delete_item: (e) ->
            (@debug) and console.log "delete"
            e.preventDefault()
            id = $(e.currentTarget).data("id")
            model = $(e.currentTarget).data("model")
            api_url = Config.API[model.ucFirst()] + "/" + id
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
            model = $(e.currentTarget).data("model")
            length = $("input:checked").length
            api_url = Config.API[model.ucFirst()] + "/all"
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

        add: (e) ->
            (@debug) and console.log "add"
            e.preventDefault()
            $(".form-group").removeClass "has-error"
            $(".help-block").text ""
            model = $(e.currentTarget).data("model")
            form_id = $(e.currentTarget).data("form")
            form_info = $(form_id).serializeObject()
            api_url = Config.API[model.ucFirst()]
            error = false
            switch model
                when "user"
                    if not $.trim(form_info.username) or not $.trim(form_info.password)
                        for name of form_info
                            unless $.trim(form_info[name])
                                $(form_id + " input[name=" + name + "]").parent().addClass "has-error"
                                error = true
                        alertify.error "紅色欄位務必填寫"    if error
                        e.stopImmediatePropagation()
                        return false
                    unless $.trim(form_info.password) is $.trim(form_info.confirm_password)
                        $(form_id + " input[name=password]").parent().addClass "has-error"
                        $(form_id + " input[name=confirm_password]").parent().addClass "has-error"
                        alertify.error "登入密碼跟確認密碼必須相等"
                        e.stopImmediatePropagation()
                        return false
                    RT.API.POST api_url, form_info, (response) ->
                        if response.error_text
                            alertify.error response.error_text
                        if response.success_text
                            alertify.success form_info.username + " 帳號新增成功"
                            $("input[type=text], input[type=password]").val ""
                            RT.dialogs.loading "close"
                            window.location = "#!/user/list"

                when "motel"
                    unless $.trim(form_info.title)
                        $(form_id + " input[name=title]").parent().addClass "has-error"
                        alertify.error "紅色欄位務必填寫"
                        e.stopImmediatePropagation()
                        return false
                    RT.API.POST api_url, form_info, (response) ->
                        if response.error_text
                            alertify.error response.error_text
                        if response.success_text
                            alertify.success form_info.title + " 摩鐵新增成功"
                            window.location = "#!/motel/list"

                when "room"
                    RT.API.POST api_url, form_info, (response) ->
                        if response.error_text
                            alertify.error response.error_text
                        if response.success_text
                            alertify.success form_info.title + " 新增成功"
                            window.location = "#!/room/list/" + form_info.motel_id

                when "new"
                    RT.API.POST api_url, form_info, (response) ->
                        if response.error_text
                            alertify.error response.error_text
                        if response.success_text
                            alertify.success form_info.title + " 新增成功"
                            window.location = "#!/new/list/" + form_info.motel_id

                when "rank"
                    RT.API.POST api_url, form_info, (response) ->
                        if response.error_text
                            alertify.error response.error_text
                        if response.success_text
                            alertify.success "評分成功"
                            window.location = "#!/rank/list/" + form_info.motel_id

                when "order"
                    RT.API.POST api_url, form_info, (response) ->
                        if response.error_text
                            alertify.error response.error_text
                        if response.success_text
                            alertify.success "訂單建立成功"
                            window.location = "#!/order/list/" + form_info.motel_id

            # call return false or e.stopPropagation() or e.stopImmediatePropagation();
            e.stopImmediatePropagation()
            false

        edit: (e) ->
            (@debug) and console.log "edit"
            e.preventDefault()
            $(".form-group").removeClass "has-error"
            $(".help-block").text ""
            model = $(e.currentTarget).data("model")
            id = $(e.currentTarget).data("id")
            form_id = $(e.currentTarget).data("form")
            form_info = $(form_id).serializeObject()
            api_url = Config.API[model.ucFirst()] + "/" + id
            switch model
                when "user"
                    if $.trim(form_info.password) isnt "" and $.trim(form_info.password) isnt $.trim(form_info.confirm_password)
                        $(form_id + " input[name=password]").parent().addClass "has-error"
                        $(form_id + " input[name=confirm_password]").parent().addClass "has-error"
                        alertify.error "修改密碼跟確認密碼必須相等"
                        e.stopImmediatePropagation()
                        return false
                when "room"
                    for name of form_info
                        unless $.trim(form_info[name])
                            $(form_id + " input[name=" + name + "]").parent().addClass "has-error"
                            error = true

            # update data
            RT.API.PUT api_url, form_info, (response) ->
                if response.error_text
                    alertify.error "修改失敗"
                if response.success_text
                    alertify.success "修改成功"

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
            RT.dialogs.loading "close"    if display
            this

        render: ->
            @handlebars()

