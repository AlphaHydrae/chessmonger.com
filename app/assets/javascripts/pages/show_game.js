
var ShowGamePage = GamePage.extend({

  showPanel : function() {
    this.panel.show(new GameInfoView({ model : this.gameModel }));
  },

  getGameData : function(contents) {
    return contents;
  }
});
