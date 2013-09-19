define ["jquery", "underscore", "backbone", "alertify", "views/view"], ($, _, Backbone, alertify, View) ->

    View.extend
        events: _.extend
            "click #motel_add_form .save": "save"
            "click #addressToLatLng": "addressToLatLng"
        , View::events

        addressToLatLng: (e) ->
            e.preventDefault()
            county = $('#county').val()
            district = $('#district').val()
            address = $('input[name="address"]').val()
            addr = county + district + address
            geocoder = new google.maps.Geocoder()
            geocoder.geocode
                "address": addr
            , (results, status) ->
                console.log status
                console.log results
                if (status is google.maps.GeocoderStatus.OK)
                    $('input[name="longitude"]').val(results[0].geometry.location.lng())
                    $('input[name="latitude"]').val(results[0].geometry.location.lat())
                    alertify.success '轉換成功'
                else
                    alertify.error '查無經緯度'

        save: (e) ->
            e.preventDefault()
            $(".form-group").removeClass "has-error"
            form_id = $(e.currentTarget).data("form")
            form_info = $(form_id).serializeObject()
            message = $(e.currentTarget).data("message")

            @model.set form_info, silent: true
            @model.save form_info,
                success: (model, response, options) ->
                    alertify.success message + "成功"
                    window.location = "#!/motel/list"
            this

        render: () ->
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
