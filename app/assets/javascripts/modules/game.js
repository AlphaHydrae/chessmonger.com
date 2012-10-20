
var Game = Backbone.Model.extend({

  urlRoot : '/games',
  idAttribute : 'key'
});

var GameView = Backbone.Marionette.ItemView.extend({

  template : 'game',
  ui : {
    board : '.board'
  },

  initialize : function(options) {
    this.model = new Game({ key : options.config.key });
    this.model.bind('change', this.update, this);
  },

  onRender : function() {
    this.drawBoard();
    this.model.fetch({ dataType : 'json' });
  },

  update : function() {
    console.log('update!');
    this.drawPieces();
  },

  drawPieces : function() {
    _.each(this.model.get('board'), _.bind(this.drawPiece, this));
  },

  drawPiece : function(data) {
    var pos = data.x + ',' + data.y;
    var posLayer = this.ui.board.getLayer(pos);
    var color = data.player == 0 ? 'white' : 'black';
    this.ui.board.drawImage({
      source : '/assets/pieces/' + color + '/' + pieceMap[data.piece] + '.png',
      x : posLayer.x + 5, y : posLayer.y + 5,
      width : posLayer.width - 10, height : posLayer.height - 10,
      fromCenter : false
    });
  },

  drawBoard : function() {
    for (var x = 1; x <= 8; x++) {
      for (var y = 1; y <= 8; y++) {
        this.ui.board.drawRect({
          layer : true, name : x + ',' + y, group: 'board',
          fillStyle : ((x + y) % 2 == 1) ? '#000' : '#fff',
          x : (x - 1) * 60, y : (8 - y) * 60,
          width : 60, height : 60,
          fromCenter : false
        });
      }
    }
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
