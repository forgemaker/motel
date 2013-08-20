define([
    'jquery',
    'underscore',
    'backbone',
    'views/view'
    ], function($, _, Backbone, View) {
    RT.Viewlogs = View.extend({

        events: _.extend({
            'click .search_log': 'search'
        }, View.prototype.events),

        search_params: {},
        search: function(e) {
            this.debug && console.log('search');
            e.preventDefault();
            var self = this,
                params, form_id = $(e.currentTarget).data('form'),
                form_info = $(form_id).serializeObject(),
                model = $(e.currentTarget).data('model');

            this.search_params = {
                url: form_info.url,
                message: form_info.message
            };

            self.options.model_name.set_params(this.search_params);
            self.collection.fetch();
            // call return false or e.stopPropagation() or e.stopImmediatePropagation();
            //e.stopImmediatePropagation();
            return this;
        },

        handle_page: function() {
            this.options.page = (+this.options.page > 1) ? this.options.page : 1;
            var data = {},
                next_page = +this.options.page + 1,
                previous_page = +this.options.page - 1;

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
                boxes = [],
                add_time, data = this.options.data || {};
            $(parent_view.el).empty();
            this.collection.each(function(item) {
                if (parent_view.search_params.url && parent_view.search_params.url !== '') {
                    item.attributes.search_url = parent_view.search_params.url;
                }

                if (parent_view.search_params.message && parent_view.search_params.message !== '') {
                    item.attributes.search_message = parent_view.search_params.message;
                }
                boxes.push(item.attributes);
            });

            data.items = boxes;

            Handlebars.registerHelper('search_url', function(text) {
                if (this.search_url && this.search_url !== '') {
                    var match = new RegExp(this.search_url, "ig");
                    return text.replace(match, '<span style="color:red">' + this.search_url + '</span>');
                }

                return text;
            });

            Handlebars.registerHelper('search_message', function(text) {
                if (this.search_message && this.search_message !== '') {
                    var match = new RegExp(this.search_message, "ig");
                    return text.replace(match, '<span style="color:red">' + this.search_message + '</span>');
                }

                return text;
            });

            $.extend(data, this.handle_page(), this.search_params);

            $(parent_view.el).hide().html(Handlebars.templates.log_list(data)).fadeIn("slow");
            RT.update_table();
            RT.dialogs.loading('close');

            return this;
        }
    });
    return RT.Viewlogs;
});