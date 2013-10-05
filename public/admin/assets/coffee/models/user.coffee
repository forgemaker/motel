define ["jquery", "underscore", "backbone", "collections/users", "config", "alertify"], ($, _, Backbone, CollectionUsers, Config, alertify) ->
    Backbone.Model.extend
        urlRoot: Config.API.User

        initialize: ->
            @lists = new CollectionUsers()
            @lists.url = Config.API.User
            @on "invalid", (model, error) ->
                alertify.error error

        validate: (attributes) ->
            if $.trim(attributes.password) isnt $.trim(attributes.confirm_password)
                $("input[name=password]").parent().addClass "has-error"
                $("input[name=confirm_password]").parent().addClass "has-error"
                return '登入密碼跟確認密碼必須相等'
            if attributes.username is ''
                $("input[name=username]").parent().addClass "has-error"
                return '帳號必須填寫'

        set_params: (params) ->
            @lists.url = Config.API.User + "?" + $.param(params)

        parse: (response) ->
            return false if !response.item
            $.extend response.item,
                is_edit: true

            response.item
