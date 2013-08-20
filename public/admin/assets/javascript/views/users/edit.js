define([
    'jquery',
    'underscore',
    'backbone',
    'views/view',
    'models/application'
    ], function($, _, Backbone, View, ModelApplication) {
    RT.ViewUser = View.extend({
        // implement render function
        events: _.extend({
            'click .delete_apps': 'delete_apps',
            'click .add_apps': 'add_apps'
        }, View.prototype.events),

        add_apps: function(e) {
            console.log('add_apps');
            e.preventDefault();
            var parent_view = this;
            var form_id = $(e.currentTarget).data('form');
            var form_info = $(form_id).serializeObject();
            var length = $(form_id + " input:checked").length;
            if (length == 0) {
                RT.show_message(form_id, 'alert-error', '尚未選取任何項目');
                e.stopImmediatePropagation();
                return false;
            }
            if (confirm("確定新增選取資料?")) {
                $.ajax({
                    url: root_path + 'WebAPI/index.php/API/Auth/addUserApps',
                    dataType: 'json',
                    type: 'POST',
                    data: form_info,
                    beforeSend: function(jqXHR, settings) {
                        RT.dialogs.loading('open');
                    },
                    success: function(response) {
                        console.log(response);
                        if (response.error_text) {
                            RT.show_message(form_id, 'alert-error', '刪除失敗');
                            RT.dialogs.loading('close');
                        }
                        if (response.success_text) {
                            RT.show_message(form_id, 'alert-success', '新增成功');
                            // remove checkbox tag
                            $(form_id + " input:checked").each(

                            function() {
                                $(this).parent().fadeOut("slow", function() {
                                    $(this).remove();
                                });
                            });
                            _.each(response.item, function(item) {
                                $("#user_app_list").append(Handlebars.templates.application_list_div_add(item));
                            });
                            RT.dialogs.loading('close');
                        }
                    }
                });
            }
            // call return false or e.stopPropagation() or e.stopImmediatePropagation();
            e.stopImmediatePropagation();
            return false;
        },

        delete_apps: function(e) {
            console.log('delete_apps');
            e.preventDefault();
            var parent_view = this;
            var form_id = $(e.currentTarget).data('form');
            var form_info = $(form_id).serializeObject();
            var length = $(form_id + " input:checked").length;
            console.log(length);
            if (length == 0) {
                RT.show_message(form_id, 'alert-error', '尚未選取任何項目');
                e.stopImmediatePropagation();
                return false;
            }
            if (confirm("確定刪除選取資料?")) {
                $.ajax({
                    url: root_path + 'WebAPI/index.php/API/Auth/deleteUserApps',
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
                            $(form_id + " input:checked").each(

                            function() {
                                $(this).parent().fadeOut("slow", function() {
                                    $(this).remove();
                                });
                            });
                            console.log('refetch applications');
                            parent_view.applications.fetch();
                            RT.dialogs.loading('close');
                        }
                    }
                });
            }
            // call return false or e.stopPropagation() or e.stopImmediatePropagation();
            e.stopImmediatePropagation();
            return false;
        },

        render: function() {
            var parent_view = this,
                data = this.options.data || {};
            $(parent_view.el).empty();

            Handlebars.registerHelper('group_active', function(text) {
                return (text === '1') ? 'checked' : '';
            });

            $.extend(data, parent_view.model.attributes);
            $(parent_view.el).hide().html(Handlebars.templates.user_edit(data)).fadeIn("slow");

            // application list
            parent_view.application = new ModelApplication();
            parent_view.applications = this.application.lists;
            new View({
                template_name: 'application_list_div',
                el: '#app_list',
                collection: parent_view.applications
            });
            parent_view.applications.fetch();

            RT.dialogs.loading('close');
            return this;
        }
    });
    return RT.ViewUser;
});