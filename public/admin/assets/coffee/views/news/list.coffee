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
            total_pages = @collection.total_pages
            next_page = if (total_pages < (@options.page + 1)) then total_pages else (@options.page + 1)
            previous_page = if ((@options.page - 1) <= 0) then 1 else (@options.page - 1)
            data =
                previous_show: if (@options.page > 1) then true else false
                next_show: if (@options.page < total_pages) then true else false
                previous_page: previous_page
                next_page: next_page
                total_pages: total_pages
            data

        render: ->
            parent_view = this
            data = @options.data or {}
            data.items = []
            $(parent_view.el).empty()
            @collection.each (item) ->
                item.attributes["type"] = (if (+item.attributes["type"]) then "<span class=\"label label-warning\">住宿</span>" else "<span class=\"label label-info\">休息</span>")
                data.items.push item.attributes

            $.extend data, @handle_page()
            $(parent_view.el).hide().html(Handlebars.templates.new_list(data)).fadeIn "slow"
            this
