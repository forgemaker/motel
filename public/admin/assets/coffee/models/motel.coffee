define ["jquery", "underscore", "backbone", "collections/motels", "config", "alertify"], ($, _, Backbone, CollectionMotels, Config, alertify) ->
    Backbone.Model.extend
        urlRoot: Config.API.Motel

        initialize: ->
            @lists = new CollectionMotels()
            @lists.url = Config.API.Motel
            @on "invalid", (model, error) ->
                alertify.error error

        validate: (attributes) ->
            if attributes.title is ''
                $('input[name="title"]').parent().addClass "has-error"
                return "名稱不能空白"

        set_params: (params) ->
            @lists.url = Config.API.Motel + "?" + $.param(params)

        parse: (response) ->
            return false if !response.item
            $.extend response.item,
                is_edit: true
                is_image: (if (response.item.raw_name isnt "") then true else false)

            response.item
