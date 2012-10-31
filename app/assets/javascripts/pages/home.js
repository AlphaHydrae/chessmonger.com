
var HomeControls = Backbone.Marionette.ItemView.extend({

  template : 'homeControls',

  events : {
    'click .new_game' : 'newGame'
  },

  newGame : function() {
    App.router.navigate('games/new', { trigger : true });
  }
});

var HomePage = Backbone.Marionette.Layout.extend({

  template : 'home',
  regions : {
    latestGames : '.latest',
    controls : '.controls'
  },

  initialize : function() {
    this.collection = new Games();
    this.bindTo(App.vent, 'page:contents', this.setContents);
  },

  onClose : function() {
    this.collection.forEach(function(model) {
      Backbone.Relational.store.unregister(model);
    });
  },

  setContents : function(contents) {
    this.collection.reset(contents);
  },

  onRender : function() {
    this.latestGames.show(new LatestGames({
      collection : this.collection
    }));
    this.controls.show(new HomeControls());
  }
});
