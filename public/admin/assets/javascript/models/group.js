define([
    'jquery',
    'underscore',
    'backbone',
    'collections/groups'
    ], function($, _, Backbone, CollectionGroups) {
    RT.ModelGroup = Backbone.Model.extend({

        initialize: function() {
            this.lists = new CollectionGroups();
            this.lists.url = RT.API.getGroupList;
        },

        set_params: function(params) {
            this.lists.url = RT.API.getGroupList + '?' + $.param(params);
        },

        url: function() {
            return RT.API.getGroupInfo + '?id=' + this.id;
        },

        parse: function(response) {
            var is_edit = true;
            $.extend(response.item, {
                "is_edit": is_edit
            });
            return response.item;
        }
    });
    return RT.ModelGroup;
});