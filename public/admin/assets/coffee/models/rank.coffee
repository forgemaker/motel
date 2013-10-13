define ["jquery", "underscore", "backbone", "collections/ranks", "config", "alertify"], ($, _, Backbone, CollectionRanks, Config, alertify) ->
    Backbone.Model.extend
        urlRoot: Config.API.Rank

        initialize: ->
            @lists = new CollectionRanks()
            @lists.url = Config.API.Rank
            @on "invalid", (model, error) ->
                alertify.error error

        validate: (attributes) ->
            if attributes.uid is ''
                $("input[name=uid]").parent().addClass "has-error"
                return '手機編號必須填寫'
            if attributes.title is ''
                $("input[name=title]").parent().addClass "has-error"
                return '標題必須填寫'

        set_lists_url: (motel_id, params) ->
            query_string = if (params) then $.param(params) else ''
            @lists.url = Config.API.Rank + "/list/" + motel_id + "?" + query_string

        parse: (response) ->
            return false if !response.item
            $.extend response.item,
                is_edit: true

            response.item
