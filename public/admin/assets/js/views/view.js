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
    'backbone',
    'alertify'
    ], function($, _, Backbone, alertify) {
    var View = Backbone.View.extend({

        initialize: function() {
            if (this.model) {
                this.model.on("change", this.render, this);
            }
            if (this.collection) {
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
                case "user":
                    var el = "#user_list";
                    $.ajax({
                        url: RT.API.DeleteUser + '/' + id,
                        dataType: 'json',
                        type: 'DELETE',
                        beforeSend: function(jqXHR, settings) {
                            RT.dialogs.loading('open');
                        },
                        success: function(response) {
                            if (response.error_text) {
                                alertify.error('刪除失敗');
                                RT.dialogs.loading('close');
                            }
                            if (response.success_text) {
                                alertify.success('帳號 ' + $(e.currentTarget).data('username') + ' 已被刪除');
                                $(e.currentTarget).parent().parent().remove();
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
                alertify.error('尚未選取任何項目');
                e.stopImmediatePropagation();
                return false;
            }
            if (confirm("確定刪除選取資料?")) {
                switch (model) {
                case "user":
                    $.ajax({
                        url: RT.API.DeleteUser + '/all',
                        dataType: 'json',
                        type: 'DELETE',
                        data: form_info,
                        beforeSend: function(jqXHR, settings) {
                            RT.dialogs.loading('open');
                        },
                        success: function(response) {
                            if (response.error_text) {
                                alertify.error('刪除失敗');
                                RT.dialogs.loading('close');
                            }
                            if (response.success_text) {
                                alertify.success('刪除成功');
                                // remove checkbox tag
                                $("input:checked").each(function() {
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
            $('.form-group').removeClass('has-error');
            $('.help-block').text('');
            var model = $(e.currentTarget).data('model');
            switch (model) {
            case 'user':
                var form_id = "#user_add_form";
                var form_info = $("#user_add_form").serializeObject();
                var error = false;
                if (!$.trim(form_info.username) || !$.trim(form_info.password)) {
                    for (var name in form_info) {
                        if (!$.trim(form_info[name])) {
                            $(form_id + ' input[name=' + name + ']').parent().addClass('has-error');
                            error = true;
                        }
                    }
                    if (error) {
                        alertify.error('紅色欄位務必填寫');
                    }
                    e.stopImmediatePropagation();
                    return false;
                }
                if ($.trim(form_info.password) != $.trim(form_info.confirm_password)) {
                    $(form_id + ' input[name=password]').parent().addClass('has-error');
                    $(form_id + ' input[name=confirm_password]').parent().addClass('has-error');
                    alertify.error('登入密碼跟確認密碼必須相等');
                    e.stopImmediatePropagation();
                    return false;
                }

                $.ajax({
                    url: RT.API.addUser,
                    dataType: 'json',
                    type: 'POST',
                    data: form_info,
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        if (response.error_text) {
                            alertify.error(response.error_text);
                            RT.dialogs.loading('close');
                        }
                        if (response.success_text) {
                            alertify.success(form_info.username + ' 帳號新增成功');
                            $('input[type=text], input[type=password]').val('');
                            RT.dialogs.loading('close');
                            window.location = "#!/user/list";
                        }
                    }
                });
                break;
            case 'motel':
                var form_id = $(e.currentTarget).data('form');
                var form_info = $(form_id).serializeObject();
                var error = false;
                if (!$.trim(form_info.title)) {
                    $(form_id + ' input[name=title]').parent().addClass('has-error');
                    alertify.error('紅色欄位務必填寫');
                    e.stopImmediatePropagation();
                    return false;
                }
                $.ajax({
                    url: RT.API.Motel,
                    dataType: 'json',
                    type: 'POST',
                    data: form_info,
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        if (response.error_text) {
                            alertify.error(response.error_text);
                            RT.dialogs.loading('close');
                        }
                        if (response.success_text) {
                            alertify.success(form_info.title + ' 摩鐵新增成功');
                            RT.dialogs.loading('close');
                            window.location = "#!/motel/list";
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
            $('.form-group').removeClass('has-error');
            $('.help-block').text('');
            var model = $(e.currentTarget).data('model');
            var id = $(e.currentTarget).data('id');
            switch (model) {
            case 'user':
                var form_id = "#user_add_form";
                var form_info = $(form_id).serializeObject();

                if ($.trim(form_info.password) != '' && $.trim(form_info.password) != $.trim(form_info.confirm_password)) {
                    $(form_id + ' input[name=password]').parent().addClass('has-error');
                    $(form_id + ' input[name=confirm_password]').parent().addClass('has-error');
                    alertify.error('修改密碼跟確認密碼必須相等');
                    e.stopImmediatePropagation();
                    return false;
                }

                $.ajax({
                    url: RT.API.User + '/' + id,
                    dataType: 'json',
                    type: 'PUT',
                    data: form_info,
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        if (response.error_text) {
                            alertify.error('帳號修改失敗');
                            RT.dialogs.loading('close');
                        }
                        if (response.success_text) {
                            alertify.success(form_info.username + ' 帳號修改成功');
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