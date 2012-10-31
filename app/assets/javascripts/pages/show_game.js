
var ShowGamePage = Backbone.Marionette.Layout.extend({

  template : 'game',

  regions : {
    board : '.board',
    panel : '.panel'
  },

  initialize : function() {
    this.bindTo(App.vent, 'page:contents', this.renderGame);
  },

  renderGame : function(contents) {
    this.gameModel = new Game(contents);
    this.board.show(new BoardView({ model : this.gameModel.get('board') }));
    this.panel.show(new GameInfoView({ model : this.gameModel }));
  }
});
