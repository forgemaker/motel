define([
    'jquery',
    'underscore',
    'backbone',
    'views/view'
    ], function($, _, Backbone, View) {
    RT.ViewPrivileges = View.extend({
        // implement render function
        render: function() {
            var parent_view = this,
                template = this.options.template_name || this.template_name,
                all_group_count = this.collection.all_group_count,
                html = "",
                item = {};

            $(parent_view.el).empty();
            this.collection.each(function(item, iterator) {
                var action = (item.get('action') == 'deny') ? true : false;
                var action_name = (item.get('action') == 'deny') ? '禁止' : '允許';
                var css_name = (item.get('action') == 'deny') ? 'btn-danger' : 'btn-primary';
                item.attributes = $.extend(item.attributes, {
                    'is_deined': action,
                    'action_name': action_name,
                    'css_name': css_name
                });
                if (iterator % all_group_count == 0) {
                    html += "<tr>";
                    html += "<td><input type='checkbox' name='id' value='" + item.get('resource_id') + "'></td>";
                    html += "<td>" + item.get('class_name') + "/" + item.get('method_name') + "</td>";
                    html += "<td>" + item.get('method') + "</td>";
                    html += "<td>" + item.get('resource_description') + "</td>";
                }

                html += "<td style='width:130px;'><button data-form='#privilege_list_form' data-action='" + item.get('action') + "' data-id='" + item.get('acl_id') + "' class='btn " + item.get('css_name') + " privilege'>" + item.get('action_name') + "</button></td>";
                if (iterator != 0 && iterator % all_group_count == (all_group_count - 1)) {
                    html += '<td><a class="btn btn-danger delete" data-model="privilege" data-id="' + item.get('resource_id') + '" href="#" style="color: white;"><i class="icon-trash icon-white"></i> 刪除</a></td>';
                    html += "</tr>";
                }
            });
            item = {
                'all_group': this.collection.all_group,
                'html': html
            };
            $(parent_view.el).html(Handlebars.templates.privilege_list(item));
            $("#main").fadeIn("slow");
            RT.update_table();
            RT.dialogs.loading('close');
            return this;
        }
    });
    return RT.ViewPrivileges;
});