define([
    'jquery',
    'underscore',
    'backbone',
    'views/view',
    'collections/applications'
], function($, _, Backbone, View, CollectionApplications){
    RT.ModelApplication = Backbone.Model.extend({
        //idAttribute: "user_id",

        initialize: function() {
            this.lists = new CollectionApplications();
            this.lists.url = RT.API.getAppList;
        },

        set_params: function(params) {
            this.lists.url = RT.API.getAppList + '?' + $.param(params);
        },

        url: function() {
            return RT.API.getAppInfo + '?app_id=' + this.id;
        },

        parse: function(response) {
            var is_edit = true;
            var is_enabled = (response.data.app_enabled == "1") ? true : false;
            $.extend(
                response.data,
                {
                    "is_edit": is_edit,
                    "is_enabled": is_enabled,
                    "id": response.data.app_id
                }
            );
            return response.data;
        }
    });

    return RT.ModelApplication;
});
