define([
    'jquery',
    'underscore',
    'backbone',
    'views/view'
    ], function($, _, Backbone, View) {
    return View.extend({

        render: function() {
            var parent_view = this,
                data = this.options.data || {};
            $(parent_view.el).empty();
            parent_view.model.attributes['rank_' + parent_view.model.attributes['rank']] = true;
            $.extend(data, parent_view.model.attributes);
            $(parent_view.el).hide().html(Handlebars.templates.rank_edit(data)).fadeIn("slow");

            RT.dialogs.loading('close');
            return this;
        }
    });
});