define ["jquery", "underscore", "backbone", "collections/motels", "config", "alertify"], ($, _, Backbone, CollectionMotels, Config, alertify) ->
    Backbone.Model.extend
        urlRoot: Config.API.Motel

        initialize: ->
            @lists = new CollectionMotels()
            @lists.url = Config.API.Motel
            @on "invalid", (model, error) ->
                alertify.error error

        validate: (attributes) ->
            self = @
            if attributes.title is ''
                $('input[name="title"]').parent().addClass "has-error"
                return "名稱不能空白"
            if attributes.longitude is '' or attributes.latitude is ''
                return "請點選轉換經座標按鈕"
            if (self.options.isAdmin)
                if attributes.contract_start is ''
                    $('input[name="contract_start"]').parent().addClass "has-error"
                    $('input[name="contract_start"]').focus()
                    return "合約開始時間不能空白"
                if attributes.contract_end is ''
                    $('input[name="contract_end"]').parent().addClass "has-error"
                    $('input[name="contract_end"]').focus()
                    return "合約結束時間不能空白"
                if attributes.contract_start >= attributes.contract_end
                    $('input[name="contract_start"]').parent().addClass "has-error"
                    $('input[name="contract_start"]').focus()
                    return "合約開始時間不能大於合約結束時間"

        set_params: (params) ->
            @lists.url = Config.API.Motel + "?" + $.param(params)

        parse: (response) ->
            return false if !response.item
            $.extend response.item,
                is_edit: true
                is_image: (if (response.item.raw_name isnt "") then true else false)

            response.item
