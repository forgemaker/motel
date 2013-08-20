define([
    'jquery',
    'underscore',
    'backbone',
    'views/view'
    ], function($, _, Backbone, View) {
    RT.ViewApplications = View.extend({

        events: _.extend({
            'click .search_app': 'search'
        }, View.prototype.events),

        search: function(e) {
            (this.debug) && console.log('search');
            e.preventDefault();
            var self = this,
                form_id = $(e.currentTarget).data('form'),
                form_info = $(form_id).serializeObject(),
                model = $(e.currentTarget).data('model'),
                params;

            switch (model) {
            case "user":
                params = {
                    first_name: form_info.first_name,
                    last_name: form_info.last_name,
                    email: form_info.email
                };
                break;
            case "websync":
                params = {
                    websync_id: form_info.websync_id
                };
                break;
            case "application":
                params = {
                    app_title: form_info.app_title,
                    app_name: form_info.app_name,
                    app_enabled: form_info.app_enabled
                };
                break;
            }
            self.options.model_name.set_params(params);
            self.collection.fetch();
            // call return false or e.stopPropagation() or e.stopImmediatePropagation();
            e.stopImmediatePropagation();
            return false;
        },

        // implement render function
        render: function() {
            var parent_view = this,
                data = this.options.data || {};

            data.items = [];

            $(parent_view.el).empty();
            this.collection.each(function(item) {
                var is_enabled = +item.get('app_enabled');
                item.set('is_enabled', is_enabled, {
                    silent: true
                });

                data.items.push(item.attributes);
            });

            $(parent_view.el).hide().html(Handlebars.templates.application_list(data)).fadeIn("slow");
            RT.update_table();
            RT.dialogs.loading('close');
            return this;
        }
    });
    return RT.ViewApplications;
});