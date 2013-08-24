#
# * Maps out the URLs in the app
#

RT.API =
    me: root_path + "user/CurrentData"
    Upload: root_path + "motel/upload"
    Room: root_path + "room"
    User: root_path + "user"
    Motel: root_path + "motel"
    getUser: root_path + "user"
    getUserList: root_path + "user"
    addUser: root_path + "user"
    DeleteUser: root_path + "user"
    getUserApps: root_path + "WebAPI/index.php/API/Auth/getUserList"
    getWebsyncList: root_path + "WebAPI/index.php/API/Auth/getWebsyncList"
    getWebSync: root_path + "WebAPI/index.php/API/Auth/getWebSync"
    getAppList: root_path + "WebAPI/index.php/API/App/getAppList"
    getAppInfo: root_path + "WebAPI/index.php/API/App/getAppInfo"
    getGroupList: root_path + "WebAPI/index.php/API/Auth/getGroupList"
    getGroupInfo: root_path + "WebAPI/index.php/API/Auth/getGroup"
    getAcls: root_path + "WebAPI/index.php/API/Acl/AclList"
    getLogList: root_path + "WebAPI/index.php/API/Log/List"

String.prototype.ucFirst = () ->
    this.substring(0, 1).toUpperCase() + this.substring(1).toLowerCase()

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

RT.api =
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

define ["jquery",
        "underscore",
        "backbone",
        'alertify',
        "models/me",
        "models/user",
        "models/motel",
        "models/room",
        "views/view",
        "views/users/list",
        "views/users/edit",
        "views/motels/list",
        "views/motels/edit",
        "views/rooms/list",
        "views/rooms/edit",
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
        "templates"], ($, _, Backbone, alertify, ModelMe, ModelUser, ModelMotel, ModelRoom, View, ViewUsers, ViewUser, ViewMotels, ViewMotel, ViewRooms, ViewRoom) ->
    AppRouter = Backbone.Router.extend(
        site_name: "Motel 後台管理"
        routes:
            "": "home"
            "!/home": "home"
            "!/motel/:action": "motel"
            "!/motel/:action/:id": "motel"
            "!/user/:action": "user"
            "!/user/:action/:id": "user"
            "!/room/:action/:id": "room"

        initialize: ->
            @me = new ModelMe()
            @me.bind "change", @update_user, this
            @me.fetch()

            # load model
            @user_model = new ModelUser()  unless @user_model
            @motel_model = new ModelMotel()  unless @motel_model
            @room_model = new ModelMotel()  unless @room_model

        update_title: (title) ->
            if title
                document.title = title + " | " + @site_name
                $(".section_title").text title
            else
                document.title = @site_name
                $(".section_title").text ""

        room: (action, id) ->
            @reset()
            RT.dialogs.loading "open"
            $("#main").html ""
            switch action
              when "list"
                    @motel_id = id or 1
                    @update_title "房型列表"
                    unless @view_rooms_list
                        @view_rooms_list = new ViewRooms(
                            el: "#main"
                            collection: @room_model.lists
                            model_name: @room_model
                            page: @page
                        )
                    @view_rooms_list.options.page = @page
                    @room_model.set_lists_url @motel_id
                    @room_model.lists.fetch({reset: true})
              when "add"
                    @update_title "新增房型"
                    unless @view_rooms_add
                        @view_rooms_add = new View(
                            template_name: "room_edit"
                            el: "#main"
                            data:
                                motel_id: id
                        )
                    @view_rooms_add.render()
              when "edit"
                    @update_title "修改房型"
                    unless @view_room
                        @view_room = new ViewRoom(
                            el: "#main"
                            model: @room_model
                        )
                    else
                        # trigger change event if model is not changed
                        @room_model.trigger "change"  unless @room_model.hasChanged()
                    @room_model.id = id
                    @room_model.fetch({reset: true})

        user: (action, id) ->
            @reset()
            RT.dialogs.loading "open"
            $("#main").html ""
            switch action
              when "list"
                    @page = id or 1
                    @update_title "帳號列表"
                    unless @view_users_list
                        @view_users_list = new ViewUsers(
                            el: "#main"
                            collection: @user_model.lists
                            model_name: @user_model
                            page: @page
                        )
                    @view_users_list.options.page = @page
                    @user_model.set_params page: @page
                    @user_model.lists.fetch({reset: true})
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
                    @user_model.fetch({reset: true})

        motel: (action, id) ->
            @reset()
            RT.dialogs.loading "open"
            $("#main").html ""
            switch action
              when "list"
                    @page = id or 1
                    @update_title "摩鐵列表"
                    unless @view_motels_list
                        @view_motels_list = new ViewMotels(
                            el: "#main"
                            collection: @motel_model.lists
                            model_name: @motel_model
                            page: @page
                        )
                    @view_motels_list.options.page = @page
                    @motel_model.set_params page: @page
                    @motel_model.lists.fetch({reset: true})
              when "add"
                    @update_title "新增摩鐵"
                    unless @view_motels_add
                        @view_motels_add = new View(
                            template_name: "motel_edit"
                            el: "#main"
                        )
                    @view_motels_add.render()
                    $('#twzipcode').twzipcode
                        'readonly': true
                    $('#contract_start, #contract_end').datepicker
                        dateFormat: 'yy-mm-dd'
                    $('#stay_time_1, #stay_time_2').timepicker()
                    # jquery upload plugin
                    $('#fileupload').fileupload
                        url: RT.API.Upload
                        dataType: 'json'
                        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
                        # 5MB
                        maxFileSize: 5000000
                        done: (e, data) ->
                            if !data.result.file_name
                                alertify.error 'Fail to upload file.'
                                return
                            image_url = window.location.protocol + '//' + window.location.hostname +  '/uploads/' + data.result.file_name
                            $('#upload_area').html '<img src="'+image_url+'" class="img-rounded" style="width: 400px; height: 200px;">'
                            $('#image_url').val image_url
                            $('#raw_name').val data.result.file_name
                            $('#progress').hide 'slow', () ->
                                $(this).find('.progress-bar').css 'width', '0%'
                        progressall: (e, data) ->
                            $('#progress').removeClass('hide').show()
                            progress = parseInt data.loaded / data.total * 100, 10
                            $('#progress .progress-bar').css 'width', progress + '%'
                        processalways: (e, data) ->
                            if (data.files[data.index].error)
                                alertify.error data.files[data.index].error
                        fail: (e, data) ->
                            alertify.error '檔案上傳失敗'
              when "edit"
                    @update_title "修改摩鐵"
                    unless @view_motel
                        @view_motel = new ViewMotel(
                            el: "#main"
                            model: @motel_model
                        )
                    else
                        # trigger change event if model is not changed
                        @motel_model.trigger "change"  unless @motel_model.hasChanged()
                    @motel_model.id = id
                    @motel_model.fetch
                        reset: true
                        success: (model, response, options) ->
                            setTimeout(
                                () ->
                                    # jquery upload plugin
                                    $('#fileupload').fileupload
                                        url: RT.API.Upload
                                        dataType: 'json'
                                        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
                                        # 5MB
                                        maxFileSize: 5000000
                                        done: (e, data) ->
                                            if !data.result.file_name
                                                alertify.error 'Fail to upload file.'
                                                return
                                            image_url = window.location.protocol + '//' + window.location.hostname +  '/uploads/' + data.result.file_name
                                            $('#upload_area').html '<img src="'+image_url+'" class="img-rounded" style="width: 400px; height: 200px;">'
                                            $('#image_url').val image_url
                                            $('#raw_name').val data.result.file_name
                                            $('#progress').hide 'slow', () ->
                                                $(this).find('.progress-bar').css 'width', '0%'
                                        progressall: (e, data) ->
                                            $('#progress').removeClass('hide').show()
                                            progress = parseInt data.loaded / data.total * 100, 10
                                            $('#progress .progress-bar').css 'width', progress + '%'
                                        processalways: (e, data) ->
                                            if (data.files[data.index].error)
                                                alertify.error data.files[data.index].error
                                        fail: (e, data) ->
                                            alertify.error '檔案上傳失敗'
                                , 2000)


        update_user: ->
            new View(
                template_name: "user_me"
                el: "#display_username"
                model: @me
            ).render()

            #if @me.get "logged_in" and $.inArray('Admin', @me.get "user_groups") != '-1'
            #    window.location.href = '../app/main/index.html'

            # show login page if not login
            unless @me.get("logged_in")
                $("#login_pannel").modal
                    backdrop: "static"
                    keyboard: false

        home: ->
            RT.dialogs.loading "close"

        reset: ->
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
                checked = $(this).attr("checked")
                if checked
                    $(this).attr "checked", false
                else
                    $(this).attr "checked", true

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
