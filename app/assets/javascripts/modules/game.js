
var Game = Backbone.Model.extend({

  urlRoot : '/games',
  idAttribute : 'key',

  initialize : function() {
    this.set('boardModel', new Board(this.get('board')), { silent : true });
    this.set('participationsCollection', new Participations(), { silent : true });
    this.get('participationsCollection').reset(this.get('participations'));
    this.bind('change:board', this.updateBoard, this);
  },

  updateBoard : function() {
    this.get('boardModel').set({ pieces : this.get('board') });
  }
});

var GameView = Backbone.Marionette.Layout.extend({

  template : 'game',
  regions : {
    board : '.board',
    participations : '.participations'
  },

  initialize : function(options) {
    this.model = new Game(options.config);
    this.boardView = new BoardView({ model : this.model.get('boardModel') });
    this.participationsView = new ParticipationsList({ collection : this.model.get('participationsCollection') });
  },

  onRender : function() {
    this.board.show(this.boardView);
    this.participations.show(this.participationsView);
  }
});

var pieceMap = {
  'ChessPawn' : 'pawn',
  'ChessKing' : 'king'
};

$(function() {

  $('.game').each(function() {
    var el = $(this);
    new Backbone.Marionette.Region({
      el : el
    }).show(new GameView({
      config : el.data('config')
    }));
  });
});
