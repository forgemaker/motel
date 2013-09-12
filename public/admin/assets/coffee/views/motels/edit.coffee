define ["jquery", "underscore", "backbone", "views/view"], ($, _, Backbone, View) ->
    View.extend render: ->
        parent_view = this
        data = @options.data or {}
        $(parent_view.el).empty()
        $.extend data, parent_view.model.attributes
        $(parent_view.el).hide().html(Handlebars.templates.motel_edit(data)).fadeIn "slow"
        $("#twzipcode").twzipcode
            readonly: true
            countySel: data.county
            districtSel: data.district

        $("#contract_start, #contract_end").datepicker dateFormat: "yy-mm-dd"
        $("#stay_time_1, #stay_time_2").timepicker()
        this
