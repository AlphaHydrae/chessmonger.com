
var Router = Backbone.Marionette.AppRouter.extend({

  routes : {},

  routePage : function(url, name, pageClass) {
    this.route(url, name, function() {
      var page = $('#page');
      new Backbone.Marionette.Region({
        el : page
      }).show(new pageClass({
        contents : page.data('contents')
      })); 
    });
  }
});

App.router = new Router();
App.router.routePage('games/:key', 'showGame', GameView);
