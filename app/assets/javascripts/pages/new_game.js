
var NewGamePage = GamePage.extend({

  showPanel : function() {
    this.panel.show(new GameForm({ model : this.gameModel }));
  },

  getGameData : function(contents) {
    return contents.variants[0];
  }
});
