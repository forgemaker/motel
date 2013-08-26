define ["jquery", "underscore", "backbone", "views/view"], ($, _, Backbone, View) ->
    View.extend
        events: _.extend(
            "click .search_user": "search"
        , View::events)
        search: (e) ->
            (@debug) and console.log("search")
            e.preventDefault()
            self = this
            form_id = $(e.currentTarget).data("form")
            form_info = $(form_id).serializeObject()
            model = $(e.currentTarget).data("model")
            params = undefined
            switch model
                when "user"
                    params =
                        first_name: form_info.first_name
                        last_name: form_info.last_name
                        email: form_info.email
            self.options.model_name.set_params params
            self.collection.fetch()

            # call return false or e.stopPropagation() or e.stopImmediatePropagation();
            #e.stopImmediatePropagation();
            this

        handle_page: ->
            data = {}
            next_page = +@options.page + 1
            previous_page = +@options.page - 1
            @options.page = (if (+@options.page > 1) then @options.page else 1)
            data =
                previous_show: (if (previous_page > 0) then true else false)
                next_show: (if (next_page > 1 and @collection.length > 0) then true else false)
                previous_page: previous_page
                next_page: next_page

            data

        render: ->
            parent_view = this
            data = @options.data or {}
            data.items = []
            $(parent_view.el).empty()
            console.log "show user list"
            @collection.each (item) ->
                data.items.push item.attributes

            $.extend data, @handle_page()
            $(parent_view.el).hide().html(Handlebars.templates.motel_list(data)).fadeIn "slow"
            RT.update_table()
            RT.dialogs.loading "close"
            this
