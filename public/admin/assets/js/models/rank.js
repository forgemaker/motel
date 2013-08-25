define([
    'jquery',
    'underscore',
    'backbone',
    'collections/ranks'
    ], function($, _, Backbone, CollectionRanks) {
    return Backbone.Model.extend({
        initialize: function() {
            this.lists = new CollectionRanks();
            this.lists.url = RT.API.Rank;
        },

        set_lists_url: function(motel_id) {
            this.lists.url = RT.API.Rank + '/list/' + motel_id;
        },

        url: function() {
            return RT.API.Rank + '/' + this.id + '/edit';
        },

        parse: function(response) {
            $.extend(response.item, {
                'is_edit': true
            });
            return response.item;
        }
    });
});