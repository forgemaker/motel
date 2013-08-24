define([
    'jquery',
    'underscore',
    'backbone',
    'collections/motels'
    ], function($, _, Backbone, CollectionMotels) {
    return Backbone.Model.extend({
        initialize: function() {
            this.lists = new CollectionMotels();
            this.lists.url = RT.API.Motel;
        },

        set_params: function(params) {
            this.lists.url = RT.API.Motel + '?' + $.param(params);
        },

        url: function() {
            return RT.API.Motel + '/' + this.id + '/edit';
        },

        parse: function(response) {
            $.extend(response.item, {
                'is_edit': true,
                'is_image': (response.item.raw_name != '') ? true : false
            });
            return response.item;
        }
    });
});