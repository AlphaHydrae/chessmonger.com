
var ShowGamePage = Backbone.Marionette.Layout.extend({

  template : _.template('<div id="gamePage" />'),

  regions : {
    body : '#gamePage'
  },

  initialize : function() {
    this.bindTo(App.vent, 'page:contents', this.renderGame);
  },

  renderGame : function(contents) {
    this.body.show(new GameView(contents));
  }
});
