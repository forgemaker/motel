/*
 * A Motel
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/motels'
    ], function($, _, Backbone, CollectionMotels) {
    return Backbone.Model.extend({
        initialize: function() {
            this.lists = new CollectionMotels();
            this.lists.url = RT.API.getMotelList;
        },

        set_params: function(params) {
            this.lists.url = RT.API.getMotelList + '?' + $.param(params);
        },

        url: function() {
            return RT.API.getMotel + '/' + this.id + '/edit';
        },

        parse: function(response) {
            var is_edit = true;
            $.extend(response.item, {
                "is_edit": is_edit
            });
            return response.item;
        }
    });
});