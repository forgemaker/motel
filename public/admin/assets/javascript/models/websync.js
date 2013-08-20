/*
 * A user
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/websyncs'
    ], function($, _, Backbone, CollectionWebSyncs) {
    RT.ModelWebSync = Backbone.Model.extend({

        initialize: function() {
            this.lists = new CollectionWebSyncs();
            this.lists.url = RT.API.getWebsyncList;
        },

        set_params: function(params) {
            this.lists.url = RT.API.getWebsyncList + '?' + $.param(params);
        },

        url: function() {
            return RT.API.getWebSync + '?id=' + this.id;
        },

        parse: function(response) {
            var is_edit = true;
            $.extend(response.item, {
                "is_edit": is_edit
            });
            return response.item;
        }
    });
    return RT.ModelWebSync;
});