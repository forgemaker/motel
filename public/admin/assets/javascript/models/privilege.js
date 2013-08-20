define([
    'jquery',
    'underscore',
    'backbone',
    'collections/privileges'
    ], function($, _, Backbone, CollectionPrivileges) {
    RT.ModelPrivilege = Backbone.Model.extend({

        initialize: function() {
            this.lists = new CollectionPrivileges();
            this.lists.url = RT.API.getAcls;
        },

        set_params: function(params) {
            this.lists.url = RT.API.getAcls + '?' + $.param(params);
        },

        url: function() {
            return RT.API.getAcls;
        },

        parse: function(response) {
            return response;
        }
    });
    return RT.ModelPrivilege;
});