String.prototype.ucFirst = () ->
    this.substring(0, 1).toUpperCase() + this.substring(1).toLowerCase()

RT.dialogs = loading: (action) ->
    if action isnt "close"
        $("#loading").show()
    else
        $("#loading").hide()

RT.update_table = ->
    # pass the headers argument and assing a object
    $(".tablesorter").tablesorter
        headers:
        # assign the secound column (we start counting zero)
            0:
                # disable it by setting the property sorter to false
                sorter: false
        selectorHeaders: "> thead th"
        theme: 'blue'

    $("table").trigger "update"
    $("#sidebar").equalHeight()

RT.generateSerial = (len) ->
    chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
    string_length = (if (len is `undefined` or isNaN(parseInt(len)) or len is "") then 32 else parseInt(len))
    randomstring = ""
    x = 0

    while x < string_length
        letterOrNumber = Math.floor(Math.random() * 2)
        if letterOrNumber is 0
            newNum = Math.floor(Math.random() * 9)
            randomstring += newNum
        else
            rnum = Math.floor(Math.random() * chars.length)
            randomstring += chars.substring(rnum, rnum + 1)
        x++
    randomstring



define ["jquery",
        "underscore",
        "backbone",
        "config",
        'alertify',
        'nprogress',
        "models/me",
        "models/user",
        "models/motel",
        "models/room",
        "models/new",
        "models/rank",
        "models/order",
        "views/view",
        "views/users/list",
        "views/users/edit",
        "views/motels/list",
        "views/motels/edit",
        "views/rooms/list",
        "views/rooms/edit",
        "views/news/list",
        "views/news/edit",
        "views/ranks/list",
        "views/ranks/edit",
        "views/orders/list",
        "views/orders/edit",
        "sockieio",
        "moment",
        "jquery.twzipcode",
        "jquery.serialize",
        "jquery.tablesorter",
        "jquery.ui.datepicker",
        "jquery.ui.timepicker",
        "bootstrap.modal",
        "bootstrap.tab",
        "jquery.equalHeight",
        "handlebars",
        "libs/handlebars-helper",
        # upload plugin
        'jquery.ui.widget',
        'jquery.iframe-transport',
        'jquery.fileupload',
        'jquery.fileupload-process',
        'jquery.fileupload-validate',
        "templates"], ($, _, Backbone, Config, alertify, NProgress, ModelMe, ModelUser, ModelMotel, ModelRoom, ModelNew, ModelRank, ModelOrder, View, ViewUsers, ViewUser, ViewMotels, ViewMotel, ViewRooms, ViewRoom, ViewNews, ViewNew, ViewRanks, ViewRank, ViewOrders, ViewOrder) ->
    # ajax set up
    $.ajaxSetup cache: false
    $(document).ajaxStart () ->
        RT.dialogs.loading 'open'
        NProgress.start()
    $(document).ajaxStop () ->
        RT.dialogs.loading 'close'
        NProgress.done()

    ajaxSettings = dataType: "json"
    api_req = (name, callback, settings) ->
        settings = (if (not settings) then {} else settings)
        $.ajax $.extend({}, ajaxSettings,
            url: name
            type: (if (settings.data) then "POST" else "GET")
            success: callback
            error: (xhr, status, errorThrown) ->
                message = "Unknown error. Please try again later."
                switch status
                    when "timeout"
                        message = "Server timeout. Please try again later."
                    when "error", "parsererror"
                        message = "Server experienced some difficulty. Please try again later."
                    when "abort"
                        message = "Aborted."
                try
                    alertify.error($.parseJSON(xhr.responseText).error_text)
                catch error
                    alertify.error message
        , settings)

    RT.API =
        GET: (path, data, callback, settings) ->
            settings = settings or {}
            data = data or {}

            # fixed ie ajax cache
            unless navigator.userAgent.indexOf("MSIE") is -1
                $.extend settings,
                    cache: false

            api_req path, callback, $.extend
                type: "GET"
                data: data
            , settings

        POST: (path, data, callback, settings) ->
            settings = settings or {}
            data = data or {}
            api_req path, callback, $.extend
                type: "POST"
                data: data
            , settings

        PUT: (path, data, callback, settings) ->
            settings = settings or {}
            data = data or {}
            api_req path, callback, $.extend
                type: "PUT"
                data: data
            , settings

        DELETE: (path, data, callback, settings) ->
            settings = settings or {}
            data = data or {}
            api_req path, callback, $.extend
                type: "DELETE"
                data: data
            , settings

    AppRouter = Backbone.Router.extend(
        site_name: "Motel 後台管理"
        routes:
            "": "home"
            "!/home": "home"
            "!/motel/:action": "motel"
            "!/motel/:action/:id": "motel"
            "!/user/:action": "user"
            "!/user/:action/:id": "user"
            "!/room/:action": "room"
            "!/room/:action/:id": "room"
            "!/room/:action/:id/:page": "room"
            "!/new/:action": "news"
            "!/new/:action/:id": "news"
            "!/new/:action/:id/:page": "news"
            "!/rank/:action": "rank"
            "!/rank/:action/:id": "rank"
            "!/rank/:action/:id/:page": "rank"
            "!/order/:action": "order"
            "!/order/:action/:id": "order"
            "!/order/:action/:id/:page": "order"

        initialize: ->
            self = @
            @in_order_list = false
            @motel = new ModelMotel()
            @motel.on "change", @update_motel, this

            @me = new ModelMe()
            @me.on "change", @update_user, this
            @me.fetch
                async: false

            # load model
            @user_model = new ModelUser()  unless @user_model
            @motel_model = new ModelMotel()  unless @motel_model
            @room_model = new ModelRoom()  unless @room_model
            @new_model = new ModelNew()  unless @new_model
            @rank_model = new ModelRank()  unless @rank_model
            @order_model = new ModelOrder()  unless @order_model

            # load view
            @view_orders_list = new ViewOrders
                el: "#main"
                collection: @order_model.lists
                model_name: @order_model

            @view_order_edit = new ViewOrder
                el: "#main"
                model: @order_model


            @view_news_list = new ViewNews
                el: "#main"
                collection: @new_model.lists
                model_name: @new_model

            @view_new_edit = new ViewNew
                el: "#main"
                model: @new_model

            @view_ranks_list = new ViewRanks
                el: "#main"
                collection: @rank_model.lists
                model_name: @rank_model

            @view_rank_edit = new ViewRank
                el: "#main"
                model: @rank_model

            @view_rooms_list = new ViewRooms
                el: "#main"
                collection: @room_model.lists
                model_name: @room_model

            @view_room_edit = new ViewRoom
                el: "#main"
                model: @room_model

            @view_users_list = new ViewUsers
                el: "#main"
                collection: @user_model.lists
                model_name: @user_model

            @view_user_edit = new ViewUser
                el: "#main"
                model: @user_model

            @view_motels_list = new ViewMotels
                el: "#main"
                collection: @motel_model.lists
                model_name: @motel_model

            @view_motel_edit = new ViewMotel
                model: @motel_model
                el: "#main"

            # socket io client (for order admin)
            @socket = io.connect('http://' + window.location.hostname + ':3000');
            @socket.on 'welcome message', (data) ->
                self.socket.emit('my other event', { my: 'data' })

            @socket.on 'push order data', (data) ->
                motel_id = +self.me.get 'motel_id'
                console.log self.in_order_list
                if (motel_id is data.motel_id)
                    alertify.success "有新訂單加入，請查看"
                    # refresh data in order list page
                    if self.in_order_list
                        self.order_model.lists.fetch
                            reset: true
                    else
                        new_count = +$('#new_order_count').text() + 1
                        $('#new_order_count').text new_count
                        $('#new_order_count').removeClass 'hide'

            @socket.on 'user disconnected', (data) ->
                console.log('user disconnected')

        redirect_url:
            error: (message, url) ->
                alertify.error message
                window.location = url
                return true
            success: (message, url) ->
                alertify.success message
                window.location = url
                return true

        auth_check: () ->
            if !@me.get 'isAdmin'
                @redirect_url.error "您並非系統管理者", "#!/user/edit"
                return true
            return false

        update_title: (title) ->
            if title
                document.title = title + " | " + @site_name
                $(".section_title").text title
            else
                document.title = @site_name
                $(".section_title").text ""

        order: (action, id, page) ->
            @reset()
            $("#main").html ""
            self = @
            @motel_id = +id or @me.get 'motel_id'
            @page = +page or 1
            return @redirect_url.error '尚未找到 Motel 相關資料', '#!/user/edit' if not @motel_id?

            switch action
                when "list"
                    @in_order_list = true
                    if id is "all"
                        return if @auth_check()
                        @update_title "全部訂單列表"
                        @view_orders_list.options.data =
                            motel_id: 'all'
                            isAdmin: @me.get 'isAdmin'
                            hideButton: true

                        @view_orders_list.options.page = @page or 1
                        @order_model.set_lists_url 'all', page: @page
                        @order_model.lists.fetch
                            reset: true
                    else
                        @update_title "訂單列表"
                        @view_orders_list.options.data =
                            motel_id: @motel_id
                            isAdmin: @me.get 'isAdmin'

                        @view_orders_list.options.page = @page or 1
                        @order_model.set_lists_url @motel_id, page: @page
                        @order_model.lists.fetch
                            reset: true
                when "add"
                    @update_title "新增訂單"
                    @order_model.clear silent: true
                    @view_order_edit.options.data =
                        motel_id: @motel_id
                    @view_order_edit.render()
                when "edit"
                    @update_title "修改訂單"
                    @order_model.clear silent: true
                    @view_order_edit.options.data =
                        motel_id: @me.get 'motel_id'
                    @order_model.id = id
                    @order_model.fetch
                        success: (model, response, options) ->
                            self.order_model.trigger 'change' unless self.order_model.hasChanged 'id'

        rank: (action, id, page) ->
            @reset()
            $("#main").html ""
            self = @
            @motel_id = +id or @me.get 'motel_id'
            @page = +page or 1
            return @redirect_url.error '尚未找到 Motel 相關資料', '#!/user/edit' if not @motel_id?

            switch action
                when "list"
                    if id is "all"
                        return if @auth_check()
                        @update_title "全部評價列表"
                        @view_ranks_list.options.data =
                            motel_id: 'all'
                            isAdmin: @me.get 'isAdmin'
                            hideButton: true

                        @view_ranks_list.options.page = @page or 1
                        @rank_model.set_lists_url 'all', page: @page
                        return @rank_model.lists.fetch
                            reset: true
                    else
                        @update_title "評價列表"
                        @view_ranks_list.options.data =
                            motel_id: @motel_id
                            isAdmin: @me.get 'isAdmin'
                        @view_ranks_list.options.page = @page or 1
                        @rank_model.set_lists_url @motel_id, page: @page
                        @rank_model.lists.fetch
                            reset: true
                when "add"
                    @update_title "新增評價"
                    @rank_model.clear silent: true
                    @view_rank_edit.options.data =
                        motel_id: @motel_id
                    @view_rank_edit.render()
                when "edit"
                    @update_title "修改評價"
                    @rank_model.clear silent: true
                    @view_rank_edit.options.data =
                        motel_id: @me.get 'motel_id'
                    @rank_model.id = id
                    @rank_model.fetch
                        success: (model, response, options) ->
                            self.rank_model.trigger 'change' unless self.rank_model.hasChanged 'id'

        news: (action, id, page) ->
            @reset()
            $("#main").html ""
            self = @
            @motel_id = +id or @me.get 'motel_id'
            @page = +page or 1
            return @redirect_url.error '尚未找到 Motel 相關資料', '#!/user/edit' if not @motel_id?

            switch action
                when "list"
                    if id is "all"
                        return if @auth_check()
                        @update_title "全部優惠列表"
                        @view_news_list.options.data =
                            motel_id: 'all'
                            isAdmin: @me.get 'isAdmin'
                            hideButton: true

                        @view_news_list.options.page = @page or 1
                        @new_model.set_lists_url 'all', page: @page
                        @new_model.lists.fetch
                            reset: true
                    else
                        @update_title "優惠列表"
                        @view_news_list.options.data =
                            motel_id: @motel_id
                        @view_news_list.options.page = @page or 1
                        @new_model.set_lists_url @motel_id, page: @page
                        @new_model.lists.fetch
                            reset: true
                when "add"
                    @update_title "新增優惠消息"
                    @view_new_edit.options.data =
                        motel_id: @motel_id
                    @new_model.clear silent: true
                    @view_new_edit.render()
                when "edit"
                    @update_title "修改優惠"
                    @view_new_edit.options.data =
                        motel_id: @me.get 'motel_id'
                    @new_model.clear silent: true
                    @new_model.id = id
                    @new_model.fetch
                        success: (model, response, options) ->
                            self.new_model.trigger 'change' unless self.new_model.hasChanged 'id'
        room: (action, id, page) ->
            @reset()
            $("#main").html ""
            self = @
            @motel_id = +id or @me.get 'motel_id'
            @page = +page or 1
            return @redirect_url.error '尚未找到 Motel 相關資料', '#!/user/edit' if not @motel_id?

            switch action
                when "list"
                    if id is "all"
                        return if @auth_check()
                        @update_title "全部房型列表"
                        @view_rooms_list.options.data =
                            motel_id: 'all'
                            isAdmin: @me.get 'isAdmin'
                            hideEnable: true
                            room_id: id

                        @view_rooms_list.options.page = @page or 1
                        @room_model.set_lists_url 'all', page: @page
                        return @room_model.lists.fetch
                            reset: true
                    else
                        @update_title "房型列表"
                        @view_rooms_list.options.data =
                            motel_id: @motel_id
                            room_id: id
                        @view_rooms_list.options.page = @page or 1
                        @room_model.set_lists_url @motel_id
                        @room_model.lists.fetch
                            reset: true
                when "add"
                    @update_title "新增房型"
                    @room_model.clear silent: true
                    @view_room_edit.options.data =
                        motel_id: @motel_id
                    @view_room_edit.render()
                when "edit"
                    @update_title "修改房型"
                    @room_model.clear silent: true
                    @view_room_edit.options.data =
                        motel_id: @me.get 'motel_id'
                    @room_model.id = id
                    @room_model.fetch
                        success: (model, response, options) ->
                            self.room_model.trigger 'change' unless self.room_model.hasChanged 'id'

        user: (action, id) ->
            @reset()
            $("#main").html ""
            self = @
            switch action
                when "logout"
                    RT.API.GET Config.API.User + '/logout', null, (response) ->
                        if response.error_text
                            alertify.error "登出失敗"
                        if response.success_text
                            alertify.success "登出成功"
                            self.motel.clear silent: true
                            self.me.fetch()
                when "list"
                    @page = +id or 1
                    @update_title "帳號列表"
                    return if @auth_check()
                    @view_users_list.options.data =
                        isAdmin: @me.get 'isAdmin'
                    @view_users_list.options.page = @page
                    @user_model.set_params page: @page
                    @user_model.lists.fetch
                        reset: true
                when "add"
                    @update_title "新增帳號"
                    return if @auth_check()
                    @user_model.clear silent: true
                    @view_user_edit.options.data =
                        isAdmin: @me.get 'isAdmin'
                    @view_user_edit.render()
                when "edit"
                    @update_title "修改帳號"
                    @user_model.clear silent: true
                    @view_user_edit.options.data =
                        isAdmin: @me.get 'isAdmin'
                    @user_model.id = id || @me.get 'user_id'
                    @user_model.fetch
                        success: (model, response, options) ->
                            self.user_model.trigger 'change' unless self.user_model.hasChanged 'id'

        motel: (action, id) ->
            @reset()
            $("#main").html ""
            self = @
            @motel_id = id or @me.get 'motel_id'
            switch action
                when "switch"
                    return @redirect_url.error '您並非管理者', '#!/user/edit' if not @me.get 'isAdmin' or not @motel_id?
                    @motel.id = @motel_id
                    @motel.fetch()
                    @me.set 'motel_id', @motel_id, silent: true
                    @redirect_url.success '成功切換權限', '#!/motel/edit'
                when "list"
                    @page = +id or 1
                    @update_title "摩鐵列表"
                    return if @auth_check()
                    @view_motels_list.options.data =
                        isAdmin: @me.get 'isAdmin'
                    @view_motels_list.options.page = @page
                    @motel_model.set_params page: @page
                    @motel_model.lists.fetch({reset: true})
                when "add"
                    @update_title "新增摩鐵"
                    return if @auth_check()
                    @motel_model.clear silent: true
                    @view_motel_edit.options.data =
                        isAdmin: @me.get 'isAdmin'
                    @view_motel_edit.render()
                when "edit"
                    return @redirect_url.error '尚未找到 Motel 相關資料', '#!/user/edit' if not @motel_id?
                    @update_title "修改摩鐵"
                    @motel_model.options =
                        isAdmin: @me.get 'isAdmin'
                    @motel_model.clear silent: true
                    @view_motel_edit.options.data =
                        isAdmin: @me.get 'isAdmin'
                    @motel_model.id = @motel_id
                    @motel_model.fetch
                        success: (model, response, options) ->
                            self.motel_model.trigger 'change' unless self.motel_model.hasChanged 'id'
        update_motel: ->
            $('#motel_title').text @motel.get 'title'

        update_user: ->
            new View(
                template_name: "user_me"
                el: "#display_username"
                model: @me
            ).render()

            # set isAdmin field
            isAdmin = if $.inArray('Admin', @me.get "user_groups") isnt -1 then true else false
            @me.set 'isAdmin', isAdmin, silent: true

            # show admin menu
            if isAdmin
                $('.admin-panel').removeClass 'hide'
            else
                $('.admin-panel').addClass 'hide'

            if @me.get('logged_in') and @me.get('motel_id')?
                @motel.id = @me.get 'motel_id'
                @motel.fetch()

            # show login page if not login
            unless @me.get("logged_in")
                $("#login_pannel").modal
                    backdrop: "static"
                    keyboard: false

        home: ->

        reset: ->
            @in_order_list = false
            @user.reset()  if typeof @user isnt "undefined" and typeof @user.reset isnt "undefined"
    )
    initialize = ->
        # click left menu list
        $(document).on("click", ".navigate_menu", (ev) ->
            ev.preventDefault()
            url = '!/' + $(this).data('url')
            RT.Router.navigate(url, {trigger: true})
        ).on("click", ".auto_generate", (ev) ->
            ev.preventDefault()
            name = $(this).data("field")
            random_serial = RT.generateSerial(32)
            $(":input[name=" + name + "]").val random_serial
        ).on("click", ".close", (ev) ->
            ev.preventDefault()
            $(this).parent().fadeOut "slow"
        ).on "click", ".check_all", (ev) ->
            ev.preventDefault()
            $("input[type=checkbox]").each ->
                checked = $(this).prop("checked")
                if checked
                    $(this).prop "checked", false
                else
                    $(this).prop "checked", true
        .on "click", "#login-button", (ev) ->
            form_id = $(this).data("form")
            form_info = $(form_id).serializeObject()
            RT.API.POST Config.API.User + '/login', form_info, (response) ->
                if response.error_text
                    alertify.error "登入失敗"
                if response.success_text
                    # clear password field
                    $('#password').val('');
                    $("#login_pannel").modal 'hide'
                    RT.Router.me.fetch
                        async: false
                    window.location = "#!/user/edit"
                    alertify.success "登入成功"

        # pass the headers argument and assing a object
        $(".tablesorter").tablesorter headers:
            # assign the secound column (we start counting zero)
            0:
                # disable it by setting the property sorter to false
                sorter: false


        # When page loads...
        $(".tab_content").hide() #Hide all content
        $("ul.tabs li:first").addClass("active").show() #Activate first tab
        $(".tab_content:first").show() #Show first tab content

        # On Click Event
        $("ul.tabs li").click ->
            $("ul.tabs li").removeClass "active" #Remove any "active" class
            $(this).addClass "active" #Add "active" class to selected tab
            $(".tab_content").hide() #Hide all tab content
            activeTab = $(this).find("a").attr("href") #Find the href attribute value to identify the active tab + content
            $(activeTab).fadeIn() #Fade in the active ID content
            false

        # pass the headers argument and assing a object
        $(".tablesorter").tablesorter headers:

            # assign the secound column (we start counting zero)
            0:
                # disable it by setting the property sorter to false
                sorter: false

        $(".column").equalHeight()
        RT.Router = new AppRouter
        # Enable pushState for compatible browsers
        enablePushState = true;
        #Disable for older browsers
        pushState = !!(enablePushState && window.history && window.history.pushState);
        # Backbone.history.start({pushState: true, hashChange: false, root: '/websync/admin'})
        Backbone.history.start()

    initialize: initialize
