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

            $.extend(data, parent_view.model.attributes);
            $(parent_view.el).hide().html(Handlebars.templates.motel_edit(data)).fadeIn("slow");
            console.log(data);
            $('#twzipcode').twzipcode({
                'readonly': true,
                'countySel': data.county,
                'districtSel': data.district
            });
            $('#contract_start, #contract_end').datepicker({
                dateFormat: 'yy-mm-dd'
            });
            $('#stay_time_1, #stay_time_2').timepicker();
            RT.dialogs.loading('close');
            return this;
        }
    });
});