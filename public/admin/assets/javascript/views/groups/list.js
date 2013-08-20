define([
    'jquery',
    'underscore',
    'backbone',
    'views/view'
    ], function($, _, Backbone, View) {
    RT.ViewGroups = View.extend({
        // implement render function
        render: function() {
            var parent_view = this,
                template = this.options.template_name || this.template_name,
                data = this.options.data || {};

            data.items = [];
            $(parent_view.el).empty();
            this.collection.each(function(item) {
                data.items.push(item.attributes);
            });

            $(parent_view.el).hide().html(Handlebars.templates.group_list(data)).fadeIn("slow");
            RT.update_table();
            RT.dialogs.loading('close');
            return this;
        }
    });
    return RT.ViewGroups;
});