define(["jquery", "underscore", "backbone", "views/view", "config", "moment"], function($, _, Backbone, View, Config, moment) {
  return View.extend({
    events: _.extend({
      "click .search_user": "search",
      'click .action': 'action'
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
    action: function(e) {
      var api_url, id, self, status_id;
      e.preventDefault();
      self = this;
      status_id = $(e.currentTarget).data('status');
      id = $(e.currentTarget).data('id');
      api_url = Config.API.Order + '/action';
      return RT.API.POST(api_url, {
        id: id,
        status_id: status_id
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
      $(parent_view.el).empty();
      this.collection.each(function(item) {
        var _ref;
        item.attributes["total_price"] = +item.attributes["total_price"];
        item.attributes["status"] = Config.Order.Status[item.attributes["status_id"]];
        item.attributes["action"] = (_ref = +item.attributes["status_id"] === 0) != null ? _ref : {
          "true": false
        };
        return data.items.push(item.attributes);
      });
      $.extend(data, this.handle_page());
      $(parent_view.el).hide().html(Handlebars.templates.order_list(data)).fadeIn("slow");
      RT.update_table();
      return this;
    }
  });
});
