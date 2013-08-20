/*
 * Application List
 */
define([
    'jquery',
    'underscore',
    'backbone'
    ], function($, _, Backbone) {
    RT.CollectionApplications = Backbone.Collection.extend({
        parse: function(response) {
            return response.data;
        }
    });
    return RT.CollectionApplications;
});