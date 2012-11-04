
var Router = Backbone.Marionette.AppRouter.extend({

  routes : {
    '' : 'home',
    'games/new' : 'newGame',
    'games/:key' : 'showGame',
  },

  pages : {
    home : HomePage,
    showGame : ShowGamePage,
    newGame : NewGamePage
  },

  initialize : function() {
    var self = this;
    _.each(this.pages, function(pageClass, name) {
      self.on('route:' + name, function() {
        App.log('Going to page ' + name);
        var args = Array.prototype.slice.call(arguments);
        var page = new pageClass(self.initialPageData);
        self.loadPage(page);
      });
    });
  },

  loadPage : function(page) {
    App.vent.trigger('page:changing', page);
    if (this.loaded) {
      App.vent.trigger('page:loading');
      $.ajax({
        url : '/' + (Backbone.history.fragment || 'home') + '.json'
      }).done(function(response) {
        App.vent.trigger('page:contents', response);
      });
    } else {
      this.loaded = true;
      App.vent.trigger('page:contents', App.bodyRegion.$el.data('contents'));
    }
  }
});

App.router = new Router();
