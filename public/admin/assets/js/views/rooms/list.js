define(["jquery", "underscore", "backbone", "views/view", "config"], function($, _, Backbone, View, Config) {
  return View.extend({
    events: _.extend({
      'click .enable': 'active',
      'click .active': 'set_weekend'
    }, View.prototype.events),
    set_weekend: function(e) {
      var api_url, is_weekend, motel_id, self;
      e.preventDefault();
      self = this;
      is_weekend = $(e.currentTarget).data('is_weekend');
      motel_id = $(e.currentTarget).data('motel_id');
      api_url = Config.API.Motel + '/enable';
      return RT.API.POST(api_url, {
        is_weekend: is_weekend,
        motel_id: motel_id
      }, function(response) {
        if (response.success_text) {
          return self.collection.fetch({
            reset: true
          });
        }
      });
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
      var data, next_page, previous_page, total_pages;
      total_pages = this.collection.total_pages;
      next_page = total_pages < (this.options.page + 1) ? total_pages : this.options.page + 1;
      previous_page = (this.options.page - 1) <= 0 ? 1 : this.options.page - 1;
      data = {
        previous_show: this.options.page > 1 ? true : false,
        next_show: this.options.page < total_pages ? true : false,
        previous_page: previous_page,
        next_page: next_page,
        total_pages: total_pages
      };
      return data;
    },
    render: function() {
      var data, parent_view;
      parent_view = this;
      data = this.options.data || {};
      data.items = [];
      data.is_weekend = this.collection.is_weekend ? true : false;
      data.motel_id = this.collection.motel_id;
      $(parent_view.el).empty();
      this.collection.each(function(item) {
        return data.items.push(item.attributes);
      });
      $.extend(data, this.handle_page());
      console.log(data);
      $(parent_view.el).hide().html(Handlebars.templates.room_list(data)).fadeIn("slow");
      RT.update_table();
      return this;
    }
  });
});
