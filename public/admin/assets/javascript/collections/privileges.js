define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
    RT.CollectionPivileges = Backbone.Collection.extend({
        parse: function(response) {
            this.all_group_count = response.all_group_count;
            this.all_group = response.all_group;
            return response.all_acl;
        }
    });
    return RT.CollectionPivileges;
});
