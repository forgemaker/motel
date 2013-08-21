define([
    'jquery',
    'underscore',
    'backbone',
    'views/view'
    ], function($, _, Backbone, View) {
    RT.ViewUsers = View.extend({

        events: _.extend({
            'click .search_user': 'search'
        }, View.prototype.events),

        initialize: function() {
            var self = this;
            if (self.model) {
                self.model.on("change", this.render, this);
            }
            if (self.collection) {
                console.log('bind on collection');
                self.collection.on("reset", this.render, this);
            }
        },

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
            }
            self.options.model_name.set_params(params);
            self.collection.fetch();
            // call return false or e.stopPropagation() or e.stopImmediatePropagation();
            //e.stopImmediatePropagation();
            return this;
        },

        handle_page: function() {
            var data = {},
                next_page = +this.options.page + 1,
                previous_page = +this.options.page - 1;
            this.options.page = (+this.options.page > 1) ? this.options.page : 1;
            data = {
                previous_show: (previous_page > 0) ? true : false,
                next_show: (next_page > 1 && this.collection.length > 0) ? true : false,
                previous_page: previous_page,
                next_page: next_page
            };

            return data;
        },

        render: function() {
            var parent_view = this,
                data = this.options.data || {};
            data.items = [];
            $(parent_view.el).empty();
            console.log('show user list');
            this.collection.each(function(item) {
                data.items.push(item.attributes);
            });

            $.extend(data, this.handle_page());
            $(parent_view.el).hide().html(Handlebars.templates.user_list(data)).fadeIn("slow");
            RT.update_table();
            RT.dialogs.loading('close');

            return this;
        }
    });
    return RT.ViewUsers;
});