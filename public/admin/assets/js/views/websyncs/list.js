define([
    'jquery',
    'underscore',
    'backbone',
    'views/view'
    ], function($, _, Backbone, View) {
    RT.ViewWebsyncUsers = View.extend({

        events: _.extend({
            'click .search_websync': 'search'
        }, View.prototype.events),

        search: function(e) {
            (this.debug) && console.log('search');
            var self = this;
            e.preventDefault();
            var form_id = $(e.currentTarget).data('form');
            var form_info = $(form_id).serializeObject();
            var model = $(e.currentTarget).data('model');

            switch (model) {
            case "user":
                var params = {
                    first_name: form_info.first_name,
                    last_name: form_info.last_name,
                    email: form_info.email
                };
                break;
            case "websync":
                var params = {
                    websync_id: form_info.websync_id
                };
                break;
            case "application":
                var params = {
                    app_title: form_info.app_title,
                    app_name: form_info.app_name,
                    app_enabled: form_info.app_enabled
                };
                break;
            }
            self.options.model_name.set_params(params);
            self.collection.fetch();
            // call return false or e.stopPropagation() or e.stopImmediatePropagation();
            //e.stopImmediatePropagation();
            return this;
        },

        handle_page: function() {
            var data = {};
            this.options.page = (+this.options.page > 1) ? this.options.page : 1;
            var next_page = +this.options.page + 1;
            var previous_page = +this.options.page - 1;
            data = {
                previous_show: (previous_page > 0) ? true : false,
                next_show: (next_page > 1 && this.collection.length > 0) ? true : false,
                previous_page: previous_page,
                next_page: next_page
            };

            return data;
        },

        // implement render function
        render: function() {
            var parent_view = this,
                data = this.options.data || {};
            data.items = [];
            $(parent_view.el).empty();

            this.collection.each(function(item) {
                data.items.push(item.attributes);
            });

            Handlebars.registerHelper('auto_create', function() {
                return new Handlebars.SafeString(
                (this.password === "") ? "yes" : "no");
            });

            $.extend(data, this.handle_page());
            $(parent_view.el).hide().html(Handlebars.templates.websync_list(data)).fadeIn("slow");
            RT.update_table();
            RT.dialogs.loading('close');

            return this;
        }
    });

    return RT.ViewWebsyncUsers;
});