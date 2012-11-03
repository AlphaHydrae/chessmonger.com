
var GamePage = Backbone.Marionette.Layout.extend({

  template : 'game',
  regions : {
    board : {
      selector : '.board',
      regionType : FadeRegion
    },
    panel : '.panel'
  },

  initialize : function(options) {
    this.gameModel = options && options.game ? options.game : null;
    this.bindTo(App.vent, 'page:contents', this.setContents);
  },

  onRender : function() {
    if (this.gameModel) {
      this.showPage();
    }
  },

  showPage : function() {
    this.board.show(new BoardView({ model : this.gameModel.get('board') }));
    this.showPanel();
  },

  setContents : function(contents) {
    if (!this.gameModel) {
      this.gameModel = new Game(this.getGameData(contents));
      this.showPage();
    }
    this.panel.currentView.setData(contents);
  }
});
