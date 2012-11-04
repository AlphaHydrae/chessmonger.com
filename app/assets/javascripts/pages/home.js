
var HomeControls = Backbone.Marionette.ItemView.extend({

  template : 'homeControls',

  events : {
    'click .new_game' : 'newGame'
  },

  initialize : function(options) {
    this.game = new Game(options.game);
  },

  newGame : function() {
    App.goToPage('games/new', { game : this.game });
  }
});

var HomePage = Backbone.Marionette.Layout.extend({

  template : 'home',
  regions : {
    latestGames : '.latest',
    controls : {
      selector : '.controls',
      regionType : FadeRegion
    }
  },

  initialize : function() {
    this.bindTo(App.vent, 'page:contents', this.setContents);
  },

  setContents : function(contents) {
    this.controls.show(new HomeControls({ game : contents.new_game }));
  },

  onRender : function() {
    this.latestGames.show(new LatestGamesView({
      collection : new LatestGames()
    }));
  }
});
