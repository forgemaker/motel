/*
 * log model
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/logs'
    ], function($, _, Backbone, CollectionLogs) {
    RT.ModelLog = Backbone.Model.extend({

        url_params: {
            page: 1,
            url: '',
            message: ''
        },

        initialize: function() {
            this.lists = new CollectionLogs();
            this.lists.url = RT.API.getLogList;
        },

        set_params: function(params) {
            $.extend(this.url_params, params);
            this.lists.url = RT.API.getLogList + '?' + $.param(this.url_params);
        }
    });
    return RT.ModelLog;
});