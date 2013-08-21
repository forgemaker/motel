/*
 * The main portion of a page
 *
 * Each RT.View should define the following properties:
 *   el: a CSS path or the parent element
 *   template_name: the data-id of the Mustache template to use for displaying the model or collection
 * Each RT.View should also specify one of the following for default rendering:
 *   model: a single object that the view will display using the template
 *   collection: a set of objects, each of which will be displayed using the template
 */

define([
    'jquery',
    'underscore',
    'backbone'
    ], function($, _, Backbone) {
    var View = Backbone.View.extend({

        initialize: function() {
            if (this.model) {
                this.model.on("change", this.render, this);
            }
            if (this.collection) {
                console.log('bind on collection');
                this.collection.on("reset", this.render, this);
            }
            this.debug = true;
        },

        events: {
            'click .add': 'add',
            'click .edit': 'edit',
            'click .delete': 'delete_item',
            'click .delete_all': 'delete_all'
        },

        delete_item: function(e) {
            (this.debug) && console.log('delete');
            e.preventDefault();
            var id = $(e.currentTarget).data("id");
            var model = $(e.currentTarget).data('model');
            if (confirm("確定刪除此筆資料?")) {
                switch (model) {
                case "privilege":
                    var el = "#privilege_list_form";
                    $.ajax({
                        url: root_path + 'WebAPI/index.php/API/Acl/DeleteAcl',
                        dataType: 'json',
                        type: 'POST',
                        data: {
                            'id': id
                        },
                        beforeSend: function(jqXHR, settings) {
                            RT.dialogs.loading('open');
                        },
                        success: function(response) {
                            if (response.error_text) {
                                RT.show_message(el, 'alert-error', '刪除失敗');
                                RT.dialogs.loading('close');
                            }
                            if (response.success_text) {
                                RT.show_message(el, 'alert-success', '刪除成功');
                                $(e.currentTarget).parent().parent().remove();
                                RT.update_table();
                                RT.dialogs.loading('close');
                            }
                        }
                    });
                    break;
                case "websync_user":
                    var el = "#websync_user_list";
                    $.ajax({
                        url: root_path + 'WebAPI/index.php/API/Auth/DeleteWebSync',
                        dataType: 'json',
                        type: 'POST',
                        data: {
                            'id': id
                        },
                        beforeSend: function(jqXHR, settings) {
                            RT.dialogs.loading('open');
                        },
                        success: function(response) {
                            var el = "#websync_user_list";
                            if (response.error_text) {
                                RT.show_message(el, 'alert-error', '刪除失敗');
                                RT.dialogs.loading('close');
                            }
                            if (response.success_text) {
                                RT.show_message(el, 'alert-success', '刪除成功');
                                $(e.currentTarget).parent().parent().remove();
                                RT.update_table();
                                RT.dialogs.loading('close');
                            }
                        }
                    });
                    break;
                case "user":
                    var el = "#user_list";
                    $.ajax({
                        url: root_path + 'WebAPI/index.php/API/Auth/DeleteUser',
                        dataType: 'json',
                        type: 'POST',
                        data: {
                            'id': id
                        },
                        beforeSend: function(jqXHR, settings) {
                            RT.dialogs.loading('open');
                        },
                        success: function(response) {
                            if (response.error_text) {
                                RT.show_message(el, 'alert-error', '刪除失敗');
                                RT.dialogs.loading('close');
                            }
                            if (response.success_text) {
                                RT.show_message(el, 'alert-success', '刪除成功');
                                $(e.currentTarget).parent().parent().remove();
                                RT.update_table();
                                RT.dialogs.loading('close');
                            }
                        }
                    });
                    break;
                case "application":
                    var el = "#application_list";
                    $.ajax({
                        url: root_path + 'WebAPI/index.php/API/App/DeleteApp',
                        dataType: 'json',
                        type: 'POST',
                        data: {
                            'app_id': id
                        },
                        beforeSend: function(jqXHR, settings) {
                            RT.dialogs.loading('open');
                        },
                        success: function(response) {
                            if (response.error_text) {
                                RT.show_message(el, 'alert-error', '刪除失敗');
                                RT.dialogs.loading('close');
                            }
                            if (response.success_text) {
                                RT.show_message(el, 'alert-success', '刪除成功');
                                $(e.currentTarget).parent().parent().remove();
                                RT.update_table();
                                RT.dialogs.loading('close');
                            }
                        }
                    });
                    break;
                case "group":
                    var el = "#group_list";
                    $.ajax({
                        url: root_path + 'WebAPI/index.php/API/Auth/DeleteGroup',
                        dataType: 'json',
                        type: 'POST',
                        data: {
                            'id': id
                        },
                        beforeSend: function(jqXHR, settings) {
                            RT.dialogs.loading('open');
                        },
                        success: function(response) {
                            if (response.error_text) {
                                RT.show_message(el, 'alert-error', '刪除失敗');
                                RT.dialogs.loading('close');
                            }
                            if (response.success_text) {
                                RT.show_message(el, 'alert-success', '刪除成功');
                                $(e.currentTarget).parent().parent().remove();
                                RT.update_table();
                                RT.dialogs.loading('close');
                            }
                        }
                    });
                    break;
                }
            }
            // call return false or e.stopPropagation() or e.stopImmediatePropagation();
            e.stopImmediatePropagation();
            return false;
        },

        delete_all: function(e) {
            (this.debug) && console.log('delete all');
            e.preventDefault();
            var form_id = $(e.currentTarget).data('form');
            var form_info = $(form_id).serializeObject();
            var model = $(e.currentTarget).data('model');
            var length = $("input:checked").length;
            if (length == 0) {
                RT.show_message(form_id, 'alert-error', '尚未選取任何項目');
                e.stopImmediatePropagation();
                return false;
            }

            if (confirm("確定刪除選取資料?")) {
                switch (model) {
                case "privilege":
                    $.ajax({
                        url: root_path + 'WebAPI/index.php/API/Acl/DeleteAcl',
                        dataType: 'json',
                        type: 'POST',
                        data: form_info,
                        beforeSend: function(jqXHR, settings) {
                            RT.dialogs.loading('open');
                        },
                        success: function(response) {
                            if (response.error_text) {
                                RT.show_message(form_id, 'alert-error', '刪除失敗');
                                RT.dialogs.loading('close');
                            }
                            if (response.success_text) {
                                RT.show_message(form_id, 'alert-success', '刪除成功');
                                // remove checkbox tag
                                $("input:checked").each(

                                function() {
                                    $(this).parent().parent().remove();
                                });
                                RT.update_table();
                                RT.dialogs.loading('close');
                            }
                        }
                    });
                    break;
                case "websync_user":
                    $.ajax({
                        url: root_path + 'WebAPI/index.php/API/Auth/DeleteWebSync',
                        dataType: 'json',
                        type: 'POST',
                        data: form_info,
                        beforeSend: function(jqXHR, settings) {
                            RT.dialogs.loading('open');
                        },
                        success: function(response) {
                            if (response.error_text) {
                                RT.show_message(form_id, 'alert-error', '刪除失敗');
                                RT.dialogs.loading('close');
                            }
                            if (response.success_text) {
                                RT.show_message(form_id, 'alert-success', '刪除成功');
                                // remove checkbox tag
                                $("input:checked").each(

                                function() {
                                    $(this).parent().parent().remove();
                                });
                                RT.update_table();
                                RT.dialogs.loading('close');
                            }
                        }
                    });
                    break;
                case "user":
                    $.ajax({
                        url: root_path + 'WebAPI/index.php/API/Auth/DeleteUser',
                        dataType: 'json',
                        type: 'POST',
                        data: form_info,
                        beforeSend: function(jqXHR, settings) {
                            RT.dialogs.loading('open');
                        },
                        success: function(response) {
                            if (response.error_text) {
                                RT.show_message(form_id, 'alert-error', '刪除失敗');
                                RT.dialogs.loading('close');
                            }
                            if (response.success_text) {
                                RT.show_message(form_id, 'alert-success', '刪除成功');
                                // remove checkbox tag
                                $("input:checked").each(

                                function() {
                                    $(this).parent().parent().remove();
                                });
                                RT.update_table();
                                RT.dialogs.loading('close');
                            }
                        }
                    });
                    break;
                case "application":
                    $.ajax({
                        url: root_path + 'WebAPI/index.php/API/App/DeleteApp',
                        dataType: 'json',
                        type: 'POST',
                        data: form_info,
                        beforeSend: function(jqXHR, settings) {
                            RT.dialogs.loading('open');
                        },
                        success: function(response) {
                            if (response.error_text) {
                                RT.show_message(form_id, 'alert-error', '刪除失敗');
                                RT.dialogs.loading('close');
                            }
                            if (response.success_text) {
                                RT.show_message(form_id, 'alert-success', '刪除成功');
                                // remove checkbox tag
                                $("input:checked").each(

                                function() {
                                    $(this).parent().parent().remove();
                                });
                                RT.update_table();
                                RT.dialogs.loading('close');
                            }
                        }
                    });
                    break;
                case "group":
                    $.ajax({
                        url: root_path + 'WebAPI/index.php/API/Auth/DeleteGroup',
                        dataType: 'json',
                        type: 'POST',
                        data: form_info,
                        beforeSend: function(jqXHR, settings) {
                            RT.dialogs.loading('open');
                        },
                        success: function(response) {
                            if (response.error_text) {
                                RT.show_message(form_id, 'alert-error', '刪除失敗');
                                RT.dialogs.loading('close');
                            }
                            if (response.success_text) {
                                RT.show_message(form_id, 'alert-success', '刪除成功');
                                // remove checkbox tag
                                $("input:checked").each(

                                function() {
                                    $(this).parent().parent().remove();
                                });
                                RT.update_table();
                                RT.dialogs.loading('close');
                            }
                        }
                    });
                    break;
                }
            }
            // call return false or e.stopPropagation() or e.stopImmediatePropagation();
            e.stopImmediatePropagation();
            return false;
        },

        add: function(e) {
            (this.debug) && console.log('add');
            e.preventDefault();
            $('.control-group').removeClass('error');
            $('.help-inline').text('');
            var model = $(e.currentTarget).data('model');
            switch (model) {
            case 'privilege':
                var form_id = "#privilege_form";
                var form_info = $(form_id).serializeObject();
                for (var name in form_info) {
                    if (!$.trim(form_info[name])) {
                        $('input[name=' + name + ']').parent().addClass('error');
                        RT.show_message(form_id, 'alert-error', '紅色欄位務必填寫');
                        e.stopImmediatePropagation();
                        return false;
                    }
                }
                var title = $(':input[name=parent_id]').find('option:selected').data('module') + '/' + form_info.resource_name;
                $.ajax({
                    url: root_path + 'WebAPI/index.php/API/Acl/AddAcl',
                    dataType: 'json',
                    type: 'POST',
                    data: form_info,
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        if (response.error_text) {
                            RT.show_message(form_id, 'alert-error', '新增失敗');
                            RT.dialogs.loading('close');
                        }
                        if (response.success_text) {
                            RT.show_message(form_id, 'alert-success', title + ' 新增成功');
                            RT.dialogs.loading('close');
                        }
                    }
                });
                break;
            case 'group':
                var form_id = "#group_form";
                var form_info = $(form_id).serializeObject();
                for (var name in form_info) {
                    if (!$.trim(form_info[name])) {
                        $('input[name=' + name + ']').parent().addClass('error');
                        RT.show_message(form_id, 'alert-error', '紅色欄位務必填寫');
                        e.stopImmediatePropagation();
                        return false;
                    }
                }

                $.ajax({
                    url: root_path + 'WebAPI/index.php/API/Auth/AddGroup',
                    dataType: 'json',
                    type: 'POST',
                    data: form_info,
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        if (response.error_text) {
                            RT.show_message(form_id, 'alert-error', '新增失敗');
                            RT.dialogs.loading('close');
                        }
                        if (response.success_text) {
                            RT.show_message(form_id, 'alert-success', form_info.name + ' 新增成功');
                            RT.dialogs.loading('close');
                        }
                    }
                });
                break;
            case 'application':
                var form_id = "#application_form";
                var form_info = $(form_id).serializeObject();
                for (var name in form_info) {
                    if (!$.trim(form_info[name])) {
                        $(form_id + ' input[name=' + name + ']').parent().addClass('error');
                        RT.show_message(form_id, 'alert-error', '紅色欄位務必填寫');
                        e.stopImmediatePropagation();
                        return false;
                    }
                }
                // checkbox is null
                if (form_info.app_enabled == undefined || form_info.app_enabled == "") {
                    form_info.app_enabled = "0";
                }
                $.ajax({
                    url: root_path + 'WebAPI/index.php/API/App/AddAppInfo',
                    dataType: 'json',
                    type: 'POST',
                    data: form_info,
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        if (response.error_text) {
                            RT.show_message(form_id, 'alert-error', '新增失敗');
                            RT.dialogs.loading('close');
                        }
                        if (response.success_text) {
                            RT.show_message(form_id, 'alert-success', form_info.app_name + ' 新增成功');
                            RT.dialogs.loading('close');
                        }
                    }
                });
                break;
            case 'websync_user':
                var form_id = "#websync_user_add_form";
                var form_info = $(form_id).serializeObject();
                if (!$.trim(form_info.websync_id) || !$.trim(form_info.password)) {
                    for (var name in form_info) {
                        if (!$.trim(form_info[name])) {
                            $(form_id + ' input[name=' + name + ']').parent().addClass('error');
                            RT.show_message(form_id, 'alert-error', '紅色欄位務必填寫');
                        }
                    }
                    e.stopImmediatePropagation();
                    return false;
                }
                if ($.trim(form_info.password) != $.trim(form_info.confirm_password)) {
                    $(form_id + ' input[name=password]').parent().addClass('error');
                    $(form_id + ' input[name=confirm_password]').parent().addClass('error');
                    RT.show_message(form_id, 'alert-error', '登入密碼跟確認密碼必須相等');
                    e.stopImmediatePropagation();
                    return false;
                }

                $.ajax({
                    url: root_path + 'WebAPI/index.php/API/Auth/AddWebSync',
                    dataType: 'json',
                    type: 'POST',
                    data: $.extend(form_info, {
                        'admin': 1
                    }),
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        if (response.error_text) {
                            RT.show_message(form_id, 'alert-error', '帳號新增失敗');
                            RT.dialogs.loading('close');
                        }
                        if (response.success_text) {
                            RT.show_message(form_id, 'alert-success', form_info.websync_id + ' 帳號新增成功');
                            $('input[type=text], input[type=password]').val('');

                            RT.dialogs.loading('close');
                        }
                    }
                });
                break;
            case 'user':
                var form_id = "#user_add_form";
                var form_info = $("#user_add_form").serializeObject();
                if (!$.trim(form_info.email) || !$.trim(form_info.password)) {
                    for (var name in form_info) {
                        if (!$.trim(form_info[name])) {
                            $(form_id + ' input[name=' + name + ']').parent().addClass('error');
                            RT.show_message(form_id, 'alert-error', '紅色欄位務必填寫');
                        }
                    }
                    e.stopImmediatePropagation();
                    return false;
                }
                if ($.trim(form_info.password) != $.trim(form_info.confirm_password)) {
                    $(form_id + ' input[name=password]').parent().addClass('error');
                    $(form_id + ' input[name=confirm_password]').parent().addClass('error');
                    RT.show_message(form_id, 'alert-error', '登入密碼跟確認密碼必須相等');
                    e.stopImmediatePropagation();
                    return false;
                }
                $.ajax({
                    url: root_path + 'WebAPI/index.php/API/Auth/AddUser',
                    dataType: 'json',
                    type: 'POST',
                    data: form_info,
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        if (response.error_text) {
                            RT.show_message(form_id, 'alert-error', '帳號新增失敗');
                            RT.dialogs.loading('close');
                        }
                        if (response.user_id) {
                            RT.show_message(form_id, 'alert-success', form_info.email + ' 帳號新增成功');
                            $('input[type=text], input[type=password]').val('');
                            RT.dialogs.loading('close');
                            window.location = "#!/user/list";
                        }
                    }
                });
                break;
            }
            // call return false or e.stopPropagation() or e.stopImmediatePropagation();
            e.stopImmediatePropagation();
            return false;
        },

        edit: function(e) {
            (this.debug) && console.log('edit');
            e.preventDefault();
            $('.control-group').removeClass('error');
            $('.help-inline').text('');
            var model = $(e.currentTarget).data('model');
            switch (model) {
            case 'websync_user':
                var form_id = "#websync_user_add_form";
                var form_info = $(form_id).serializeObject();
                if ($.trim(form_info.password) != '' && $.trim(form_info.password) != $.trim(form_info.confirm_password)) {
                    $(form_id + ' input[name=password]').parent().addClass('error');
                    $(form_id + ' input[name=confirm_password]').parent().addClass('error');
                    RT.show_message(form_id, 'alert-error', '修改密碼跟確認密碼必須相等');
                    e.stopImmediatePropagation();
                    return false;
                }

                $.ajax({
                    url: root_path + 'WebAPI/index.php/API/Auth/UpdateWebSync',
                    dataType: 'json',
                    type: 'POST',
                    data: form_info,
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        if (response.error_text) {
                            RT.show_message(form_id, 'alert-error', '帳號修改失敗');
                            RT.dialogs.loading('close');
                        }
                        if (response.success_text) {
                            RT.show_message(form_id, 'alert-success', form_info.websync_id + ' 帳號修改成功');
                            RT.dialogs.loading('close');
                        }
                    }
                });
                break;
            case 'group':
                var form_id = "#group_form";
                var form_info = $(form_id).serializeObject();
                for (var name in form_info) {
                    if (!$.trim(form_info[name])) {
                        $('input[name=' + name + ']').parent().addClass('error');
                        RT.show_message(form_id, 'alert-error', '紅色欄位務必填寫');
                        e.stopImmediatePropagation();
                        return false;
                    }
                }

                $.ajax({
                    url: root_path + 'WebAPI/index.php/API/Auth/UpdateGroup',
                    dataType: 'json',
                    type: 'POST',
                    data: form_info,
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        if (response.error_text) {
                            RT.show_message(form_id, 'alert-error', '修改失敗');
                            RT.dialogs.loading('close');
                        }
                        if (response.success_text) {
                            RT.show_message(form_id, 'alert-success', form_info.name + ' 修改成功');
                            RT.dialogs.loading('close');
                        }
                    }
                });
                break;
            case 'application':
                var form_id = "#application_form";
                var form_info = $(form_id).serializeObject();
                for (var name in form_info) {
                    if (!$.trim(form_info[name])) {
                        $(form_id + ' input[name=' + name + ']').parent().addClass('error');
                        RT.show_message(form_id, 'alert-error', '紅色欄位務必填寫');
                        e.stopImmediatePropagation();
                        return false;
                    }
                }
                // checkbox is null
                if (form_info.app_enabled == undefined || form_info.app_enabled == "") {
                    form_info.app_enabled = 0;
                }
                $.ajax({
                    url: root_path + 'WebAPI/index.php/API/App/UpdateAppInfo',
                    dataType: 'json',
                    type: 'POST',
                    data: form_info,
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        if (response.error_text) {
                            RT.show_message(form_id, 'alert-error', '修改失敗');
                            RT.dialogs.loading('close');
                        }
                        if (response.success_text) {
                            RT.show_message(form_id, 'alert-success', form_info.app_name + ' 修改成功');
                            RT.dialogs.loading('close');
                        }
                    }
                });
                break;
            case 'user':
                var form_id = "#user_add_form";
                var form_info = $(form_id).serializeObject();

                if ($.trim(form_info.password) != '' && $.trim(form_info.password) != $.trim(form_info.confirm_password)) {
                    $(form_id + ' input[name=password]').parent().addClass('error');
                    $(form_id + ' input[name=confirm_password]').parent().addClass('error');
                    RT.show_message(form_id, 'alert-error', '修改密碼跟確認密碼必須相等');
                    e.stopImmediatePropagation();
                    return false;
                }
                $.ajax({
                    url: root_path + 'WebAPI/index.php/API/Auth/UpdateUser',
                    dataType: 'json',
                    type: 'POST',
                    data: form_info,
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        if (response.error_text) {
                            RT.show_message(form_id, 'alert-error', '帳號修改失敗');
                            RT.dialogs.loading('close');
                        }
                        if (response.success_text) {
                            RT.show_message(form_id, 'alert-success', form_info.email + ' 帳號修改成功');
                            RT.dialogs.loading('close');
                        }
                    }
                });
                break;
            }
            // call return false or e.stopPropagation() or e.stopImmediatePropagation();
            e.stopImmediatePropagation();
            return false;
        },

        handlebars: function() {
            if (!this.options.el) {
                $('body').append(this.el);
            }
            var template_name = this.options.template_name || this.template_name;
            var data = this.options.data || {};
            var is_table = this.options.is_table || false;
            var is_append = this.options.is_append || false;
            var display = (this.options.display === false) ? false : true;
            if (!template_name) {
                console.log("Error: Could not find template");
                return;
            }
            if (this.model && this.collection) {
                console.log("Both model and collection provided. Please override render() or mustache()");
            } else if (this.model) {
                $.extend(this.model.attributes, data);
                if (is_append) {
                    $(this.el).append(Handlebars.templates[template_name](this.model.attributes));
                } else {
                    $(this.el).html(Handlebars.templates[template_name](this.model.attributes));
                }
            } else if (this.collection) {
                $(this.el).empty();
                var parent_view = this;
                this.collection.each(function(item) {
                    var child_view = new View({
                        tagName: (is_table) ? 'tr' : '',
                        template_name: template_name,
                        model: item
                    });
                    $(parent_view.el).append(child_view.render().el);
                });
            } else {
                $(this.el).hide().html(Handlebars.templates[template_name](data));
            }

            if (is_table) RT.update_table();
            if (display) this.$el.fadeIn("slow");
            if (display) RT.dialogs.loading('close');
            return this;
        },

        render: function() {
            return this.handlebars();
        }
    });

    return View;
});