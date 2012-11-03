
var Router = Backbone.Marionette.AppRouter.extend({

  routes : {},

  routePage : function(url, name, pageClass) {
    var self = this;
    this.route(url, name, function(actualUrl) {
      App.vent.trigger('page:changing');
      self.pageRegion().show(new pageClass(self.initialPageData)); 
      self.initialPageData = undefined;
      App.vent.trigger('page:loading');
      if (self.loaded) {
        $.ajax({
          url : '/' + (Backbone.history.fragment || 'home') + '.json'
        }).done(function(response) {
          App.vent.trigger('page:contents', response);
        });
      } else {
        self.loaded = true;
        App.vent.trigger('page:contents', self.pageRegion().$el.data('contents'));
      }
    });
  },

  pageRegion : function() {
    if (!this.region) {
      this.region = new Backbone.Marionette.Region({
        el : $('#page')
      });
    }
    return this.region;
  }
});

App.router = new Router();
App.router.routePage('', 'homepage', HomePage);
App.router.routePage('games/:key', 'showGame', ShowGamePage);
App.router.routePage('games/new', 'newGame', NewGamePage);
