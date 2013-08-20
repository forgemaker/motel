#
# * Maps out the URLs in the app
#

RT.API =
    me: root_path + "WebAPI/index.php/API/Auth/getUserData"
    getUser: root_path + "WebAPI/index.php/API/Auth/getUser"
    getUserList: root_path + "WebAPI/index.php/API/Auth/getUserList"
    getUserApps: root_path + "WebAPI/index.php/API/Auth/getUserList"
    getWebsyncList: root_path + "WebAPI/index.php/API/Auth/getWebsyncList"
    getWebSync: root_path + "WebAPI/index.php/API/Auth/getWebSync"
    getAppList: root_path + "WebAPI/index.php/API/App/getAppList"
    getAppInfo: root_path + "WebAPI/index.php/API/App/getAppInfo"
    getGroupList: root_path + "WebAPI/index.php/API/Auth/getGroupList"
    getGroupInfo: root_path + "WebAPI/index.php/API/Auth/getGroup"
    getAcls: root_path + "WebAPI/index.php/API/Acl/AclList"
    getLogList: root_path + "WebAPI/index.php/API/Log/List"

RT.dialogs = loading: (action) ->
    if action isnt "close"
        $("#loading").show()
    else
        $("#loading").hide()

RT.show_message = (id, type, message) ->
    $(".alert").remove()
    html = "<div class=\"alert\" style=\"display:none;\"><a class=\"close\" data-dismiss=\"alert\">×</a><span class=\"message\"></span></div>"
    type = type or "alert-success"
    message = message or ""
    return false  if message is "" or id is `undefined`
    $(html).insertBefore id
    $(".message").text message
    $(".alert").addClass(type).fadeIn "slow", ->
        setTimeout ((e) ->
            $(".alert").fadeOut "slow"
        ), 10000

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
        "models/me",
        "models/user",
        "models/websync",
        "models/application",
        "models/group",
        "models/privilege",
        "models/log",
        "views/view",
        "views/users/list",
        "views/users/edit",
        "views/websyncs/list",
        "views/applications/list",
        "views/groups/list",
        "views/privileges/list",
        "views/logs/list",
        "../vendor/moment/moment",
        "../vendor/jquery-serialize-object/jquery.serialize-object",
        "../vendor/jquery.tablesorter/js/jquery.tablesorter",
        "libs/jquery/jquery-ui-1.8.18.custom.min",
        "libs/jquery/bootstrap-modal",
        "libs/jquery/swfobject",
        "libs/jquery/jquery.uploadify.v2.1.4.min",
        "libs/jquery/jquery.equalHeight",
        "libs/twitter/bootstrap-tab",
        "handlebars",
        "libs/handlebars-helper",
        "templates"], ($, _, Backbone, ModelMe, ModelUser, ModelWebsync, ModelApplication, ModelGroup, ModelPrivilege, ModelLog, View, ViewUsersList, ViewUser, ViewWebsyncsList, ViewApplicationsList, ViewGroupsList, ViewPrivilegesList, ViewLogsList) ->
    AppRouter = Backbone.Router.extend(
        site_name: "WebSync 後台管理"
        routes:
            "": "home"
            "!/home": "home"
            "!/websync/:action": "websync"
            "!/user/:action": "user"
            "!/websync/:action/:id": "websync"
            "!/user/:action/:id": "user"
            "!/application/:action": "application"
            "!/application/:action/:id": "application"
            "!/group/:action": "group"
            "!/group/:action/:id": "group"
            "!/privilege/:action": "privilege"
            "!/privilege/:action/:id": "privilege"
            "!/log/:action": "log"
            "!/log/:action/:id": "log"

        initialize: ->
            @me = new ModelMe()
            @me.bind "change", @update_user, this
            @me.fetch()

            # load model
            @user_model = new ModelUser()  unless @user_model
            @websync_model = new ModelWebsync()  unless @websync_model
            @app_model = new ModelApplication()  unless @app_model
            @group_model = new ModelGroup()  unless @group_model
            @privilege_model = new ModelPrivilege()  unless @privilege_model
            @log_model = new ModelLog()  unless @log_model

        update_title: (title) ->
            if title
                document.title = @site_name + "::" + title
                $(".section_title").text title
            else
                document.title = @site_name
                $(".section_title").text ""

        user: (action, id) ->
            @reset()
            RT.dialogs.loading "open"
            $("#main").html ""
            switch action
              when "list"
                    @page = id or 1
                    @update_title "帳號列表"
                    unless @view_users_list
                        @view_users_list = new ViewUsersList(
                            el: "#main"
                            collection: @user_model.lists
                            model_name: @user_model
                            page: @page
                        )
                    @view_users_list.options.page = @page
                    @user_model.set_params page: @page
                    @user_model.lists.fetch()
              when "add"
                    @update_title "新增帳號"
                    unless @view_users_add
                        @view_users_add = new View(
                            template_name: "user_edit"
                            el: "#main"
                        )
                    @view_users_add.render()
              when "edit"
                    @update_title "修改帳號"
                    unless @view_user
                        @view_user = new ViewUser(
                            el: "#main"
                            model: @user_model
                        )
                    else

                        # trigger change event if model is not changed
                        @user_model.trigger "change"  unless @user_model.hasChanged()
                    @user_model.id = id
                    @user_model.fetch()

        websync: (action, id) ->
            @reset()
            RT.dialogs.loading "open"
            $("#main").html ""
            switch action
              when "list"
                    @page = id or 1
                    @update_title "WebSync 帳號列表"
                    unless @view_websyncs_list
                        @view_websyncs_list = new ViewWebsyncsList(
                            el: "#main"
                            collection: @websync_model.lists
                            model_name: @websync_model
                            page: @page
                        )
                    @view_websyncs_list.options.page = @page
                    @websync_model.set_params page: @page
                    @websync_model.lists.fetch()
              when "add"
                    @update_title "新增 WebSync 帳號"
                    unless @view_websyncs_add
                        @view_websyncs_add = new View(
                            template_name: "websync_edit"
                            el: "#main"
                        )
                    @view_websyncs_add.render()
              when "edit"
                    @update_title "修改 WebSync 帳號"
                    unless @view_websync
                        @view_websync = new View(
                            template_name: "websync_edit"
                            el: "#main"
                            model: @websync_model
                        )
                    else
                        # trigger change event if model is not changed
                        @websync_model.trigger "change"  unless @websync_model.hasChanged()
                    @websync_model.id = id
                    @websync_model.fetch()

        application: (action, id) ->
            RT.dialogs.loading "open"
            $("#main").html ""
            switch action
              when "list"
                    @page = id or 1
                    @update_title "軟體列表"
                    unless @view_apps_list
                        @view_apps_list = new ViewApplicationsList(
                            el: "#main"
                            collection: @app_model.lists
                            model_name: @app_model
                            page: @page
                        )
                    @view_apps_list.options.page = @page
                    @app_model.set_params page: @page
                    @app_model.lists.fetch()
              when "add"
                    @update_title "新增軟體"
                    unless @view_app_add
                        @view_app_add = new View(
                            template_name: "application_edit"
                            el: "#main"
                        )
                    @view_app_add.render()
              when "edit"
                    @update_title "修改軟體"
                    unless @view_app
                        @view_app = new View(
                            template_name: "application_edit"
                            el: "#main"
                            model: @app_model
                        )
                    else

                        # trigger change event if model is not changed
                        @app_model.trigger "change"  unless @app_model.hasChanged()
                    @app_model.id = id
                    @app_model.fetch()

        group: (action, id) ->
            RT.dialogs.loading "open"
            $("#main").html ""
            switch action
              when "list"
                    @page = id or 1
                    @update_title "群組列表"
                    unless @view_groups_list
                        @view_groups_list = new ViewGroupsList(
                            el: "#main"
                            collection: @group_model.lists
                            model_name: @group_model
                            page: @page
                        )
                    @view_groups_list.options.page = @page
                    @group_model.set_params page: @page
                    @group_model.lists.fetch()
              when "add"
                    @update_title "新增群組"
                    unless @view_group_add
                        @view_group_add = new View(
                            template_name: "group_edit"
                            el: "#main"
                        )
                    @view_group_add.render()
              when "edit"
                    @update_title "修改群組"
                    unless @view_group
                        @view_group = new View(
                            template_name: "group_edit"
                            el: "#main"
                            model: @group_model
                        )
                    else

                        # trigger change event if model is not changed
                        @group_model.trigger "change"  unless @group_model.hasChanged()
                    @group_model.id = id
                    @group_model.fetch()

        privilege: (action, id) ->
            RT.dialogs.loading "open"
            $("#main").html ""
            switch action
              when "list"
                    @page = id or 1
                    @update_title "權限列表"
                    unless @view_privilege_list
                        @view_privilege_list = new ViewPrivilegesList(
                            el: "#main"
                            collection: @privilege_model.lists
                            page: @page
                        )
                    @view_privilege_list.options.page = @page
                    @privilege_model.set_params page: @page
                    @privilege_model.lists.fetch()
              when "add"
                    @update_title "新增權限"
                    unless @view_privilege_add
                        @view_privilege_add = new View(
                            template_name: "privilege_edit"
                            el: "#main"
                            model: @privilege_model
                        )
                    else

                        # trigger change event if model is not changed
                        @privilege_model.trigger "change"  unless @privilege_model.hasChanged()
                    @privilege_model.fetch()

        log: (action, id) ->
            RT.dialogs.loading "open"
            $("#main").html ""
            switch action
              when "list"
                    @page = id or 1
                    @update_title "前端錯誤列表"
                    unless @view_log_list
                        @view_log_list = new ViewLogsList(
                            el: "#main"
                            collection: @log_model.lists
                            model_name: @log_model
                            page: @page
                        )
                    @view_log_list.options.page = @page
                    @log_model.set_params page: @page
                    @log_model.lists.fetch()

        update_user: ->
            new View(
                template_name: "user_me"
                el: "#display_username"
                model: @me
            ).render()

            if @me.get "logged_in" and $.inArray('Admin', @me.get "user_groups") != '-1'
                window.location.href = '../app/main/index.html'

            # show login page if not login
            unless @me.get("logged_in")
                $("#login_pannel").modal
                    backdrop: "static"
                    keyboard: false

        home: ->
            @update_title "管理首頁"
            RT.dialogs.loading "close"

        reset: ->
            @user.reset()  if typeof @user isnt "undefined" and typeof @user.reset isnt "undefined"
            @websync.reset()  if typeof @websync isnt "undefined" and typeof @websync.reset isnt "undefined"
    )
    initialize = ->
        # click left menu list
        $(document).on("click", ".navigate_menu", (ev) ->
            ev.preventDefault()
            url = '!/' + $(this).data('url')
            RT.Router.navigate(url, {trigger: true})
        ).on("mouseenter", ".privilege", (ev) ->
            ev.preventDefault()
            id = $(this).data("id")
            action = $(this).data("action")
            if action is "deny"
                $(this).removeClass("btn-danger").addClass "btn-primary"
                $(this).text "允許"
            else
                $(this).removeClass("btn-primary").addClass "btn-danger"
                $(this).text "禁止"
        ).on("mouseleave", ".privilege", (ev) ->
            ev.preventDefault()
            id = $(this).data("id")
            action = $(this).data("action")
            if action is "deny"
                $(this).removeClass("btn-primary").addClass "btn-danger"
                $(this).text "禁止"
            else
                $(this).removeClass("btn-danger").addClass "btn-primary"
                $(this).text "允許"
        ).on("click", ".privilege", (ev) ->
            ev.preventDefault()
            id = $(this).data("id")
            priview_action = $(this).data("action")
            current_action = (if (priview_action is "deny") then "allow" else "deny")
            form_info =
                id: id
                action: current_action

            form_id = $(this).data("form")
            if priview_action is "deny"
                $(this).data "action", "allow"
            else
                $(this).data "action", "deny"
            $.ajax
                url: root_path + "WebAPI/index.php/API/Acl/UpdateAcl"
                dataType: "json"
                type: "POST"
                data: form_info
                success: (response) ->
                    if response.error_text
                        RT.show_message form_id, "alert-error", "修改失敗"
                        RT.dialogs.loading "close"
                    RT.show_message form_id, "alert-success", "修改成功"  if response.success_text

        ).on("click", ".auto_generate", (ev) ->
            ev.preventDefault()
            name = $(this).data("field")
            random_serial = RT.generateSerial(32)
            $(":input[name=" + name + "]").val random_serial
        ).on("click", ".close", (ev) ->
            ev.preventDefault()
            $(this).parent().fadeOut "slow"
        ).on("click", ".toggle > li > a", (ev) ->
        ).on "click", ".check_all", (ev) ->
            ev.preventDefault()
            $("input[type=checkbox]").each ->
                checked = $(this).attr("checked")
                if checked
                    $(this).attr "checked", false
                else
                    $(this).attr "checked", true


        $("#websync_user_add_form").on "submit", (ev) ->
            ev.preventDefault()
            model = $(this).data("model")
            switch model
              when "websync_user"
                    websync_user_info = $("#websync_user_add_form").serializeObject()
                    if not $.trim(websync_user_info.websync_id) or not $.trim(websync_user_info.password)
                        for name of websync_user_info
                            unless $.trim(websync_user_info[name])
                                $("#websync_user_add_form input[name=" + name + "]").parent().addClass "error"
                                $("#websync_user_add_form input[name=" + name + "]").parent().find(".help-inline").text "此欄位務必填寫"
                        return false


        # pass the headers argument and assing a object
        $(".tablesorter").tablesorter headers:
            # assign the secound column (we start counting zero)
            0:
                # disable it by setting the property sorter to false
                sorter: false


        #When page loads...
        $(".tab_content").hide() #Hide all content
        $("ul.tabs li:first").addClass("active").show() #Activate first tab
        $(".tab_content:first").show() #Show first tab content

        #On Click Event
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

