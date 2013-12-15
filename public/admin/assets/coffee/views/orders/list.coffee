define ["jquery", "underscore", "backbone", "views/view", "config", "moment"], ($, _, Backbone, View, Config, moment) ->
    View.extend
        events: _.extend(
            "click .search_user": "search"
            'click .action': 'action'
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

        action: (e) ->
            e.preventDefault()
            self = this
            status_id = $(e.currentTarget).data 'status'
            id = $(e.currentTarget).data 'id'
            api_url = Config.API.Order + '/action'
            RT.API.POST api_url,
                id: id
                status_id: status_id
                , (response) ->
                    if response.success_text
                        self.collection.fetch
                            reset: true

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
                item.attributes["total_price"] = +item.attributes["total_price"]
                item.attributes["status"] = Config.Order.Status[item.attributes["status_id"]]
                item.attributes["action"] = (+item.attributes["status_id"] is 0) ? true : false
                data.items.push item.attributes

            $.extend data, @handle_page()
            $(parent_view.el).hide().html(Handlebars.templates.order_list(data)).fadeIn "slow"
            RT.update_table()
            this
