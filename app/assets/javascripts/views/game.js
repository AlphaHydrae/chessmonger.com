
var GameView = Backbone.Marionette.Layout.extend({

  template : 'game',
  regions : {
    board : '.board',
    participations : '.participations'
  },

  initialize : function(options) {
    this.model = new Game(options.contents);
    this.boardView = new BoardView({ model : this.model.get('board') });
    this.participationsView = new ParticipationsList({ collection : this.model.get('participations') });
  },

  onRender : function() {
    this.board.show(this.boardView);
    this.participations.show(this.participationsView);
  }
});
