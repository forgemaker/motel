define ["jquery", "underscore", "backbone", "views/view", "config"], ($, _, Backbone, View, Config) ->
    View.extend
        events: _.extend(
            'click .enable': 'active'
        , View::events)

        active: (e) ->
            e.preventDefault()
            self = this
            active = $(e.currentTarget).data 'active'
            motel_id = $(e.currentTarget).data 'motel_id'
            id = $(e.currentTarget).data 'id'
            api_url = Config.API.Room + '/enable'
            RT.API.POST api_url,
                id: id
                active: active
                motel_id: motel_id
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
            console.log data
            data

        render: ->
            parent_view = this
            data = @options.data or {}
            data.items = []
            $(parent_view.el).empty()
            @collection.each (item) ->
                data.items.push item.attributes

            $.extend data, @handle_page()
            $(parent_view.el).hide().html(Handlebars.templates.room_list(data)).fadeIn "slow"
            RT.update_table()
            this
