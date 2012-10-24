
var HomePage = Backbone.Marionette.Layout.extend({

  template : 'home',
  regions : {
    latestGames : '.latest'
  },

  initialize : function(options) {
    this.collection = new Games(options.contents);
  },

  onRender : function() {
    this.latestGames.show(new LatestGames({
      collection : this.collection
    }));
  }
});
