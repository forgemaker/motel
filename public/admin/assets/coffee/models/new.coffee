define ["jquery", "underscore", "backbone", "collections/news", "config", "alertify"], ($, _, Backbone, CollectionNews, Config, alertify) ->
    Backbone.Model.extend
        urlRoot: Config.API.New

        initialize: ->
            @lists = new CollectionNews()
            @lists.url = Config.API.New
            @on "invalid", (model, error) ->
                alertify.error error

        validate: (attributes) ->
            if attributes.title is ''
                $("input[name=title]").parent().addClass "has-error"
                return '標題必須填寫'
            if attributes.start_time is ''
                $("input[name=start_time]").parent().addClass "has-error"
                return '起始時間必須填寫'
            if attributes.end_time is ''
                $("input[name=end_time]").parent().addClass "has-error"
                return '結束日期必須填寫'

        set_lists_url: (motel_id) ->
            @lists.url = Config.API.New + "/list/" + motel_id

        parse: (response) ->
            return false if !response.item
            $.extend response.item,
                is_edit: true
                is_image: (if (response.item.raw_name isnt "") then true else false)

            response.item
