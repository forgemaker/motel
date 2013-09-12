define(["jquery", "underscore", "backbone", "views/view", "config"], function($, _, Backbone, View, Config) {
  return View.extend({
    events: _.extend({
      "click .search_user": "search",
      'click .enable': 'active'
    }, View.prototype.events),
    search: function(e) {
      var form_id, form_info, model, params, self;
      this.debug && console.log("search");
      e.preventDefault();
      self = this;
      form_id = $(e.currentTarget).data("form");
      form_info = $(form_id).serializeObject();
      model = $(e.currentTarget).data("model");
      params = void 0;
      switch (model) {
        case "user":
          params = {
            first_name: form_info.first_name,
            last_name: form_info.last_name,
            email: form_info.email
          };
      }
      self.options.model_name.set_params(params);
      self.collection.fetch();
      return this;
    },
    active: function(e) {
      var active, api_url, id, motel_id, self;
      e.preventDefault();
      self = this;
      active = $(e.currentTarget).data('active');
      motel_id = $(e.currentTarget).data('motel_id');
      id = $(e.currentTarget).data('id');
      api_url = Config.API.Room + '/enable';
      return RT.API.POST(api_url, {
        id: id,
        active: active,
        motel_id: motel_id
      }, function(response) {
        if (response.success_text) {
          return self.collection.fetch({
            reset: true
          });
        }
      });
    },
    handle_page: function() {
      var data, next_page, previous_page;
      data = {};
      next_page = +this.options.page + 1;
      previous_page = +this.options.page - 1;
      this.options.page = (+this.options.page > 1 ? this.options.page : 1);
      data = {
        previous_show: (previous_page > 0 ? true : false),
        next_show: (next_page > 1 && this.collection.length > 0 ? true : false),
        previous_page: previous_page,
        next_page: next_page
      };
      return data;
    },
    render: function() {
      var data, parent_view;
      parent_view = this;
      data = this.options.data || {};
      data.items = [];
      $(parent_view.el).empty();
      this.collection.each(function(item) {
        return data.items.push(item.attributes);
      });
      $.extend(data, this.handle_page());
      $(parent_view.el).hide().html(Handlebars.templates.room_list(data)).fadeIn("slow");
      RT.update_table();
      return this;
    }
  });
});
