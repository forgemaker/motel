define([
    'jquery',
    'underscore',
    'backbone',
    'collections/rooms'
    ], function($, _, Backbone, CollectionRooms) {
    return Backbone.Model.extend({
        initialize: function() {
            this.lists = new CollectionRooms();
            this.lists.url = RT.API.Room;
        },

        set_lists_url: function(motel_id) {
            this.lists.url = RT.API.Room + '/' + motel_id;
        },

        url: function() {
            return RT.API.Room + '/' + this.id + '/edit';
        },

        parse: function(response) {
            $.extend(response.item, {
                "is_edit": true
            });
            return response.item;
        }
    });
});