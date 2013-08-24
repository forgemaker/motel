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
            this.lists.url = RT.API.Room + '/list/' + motel_id;
        },

        url: function() {
            return RT.API.Room + '/' + this.id + '/edit';
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