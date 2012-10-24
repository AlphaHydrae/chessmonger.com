
var pieceMap = {
  'ChessPawn' : 'pawn',
  'ChessKing' : 'king'
};

var BoardView = Backbone.Marionette.ItemView.extend({

  template : 'board',
  ui : {
    canvas : 'canvas'
  },

  onRender : function() {
    this.drawPositions();
    this.drawPieces();
  },

  drawPieces : function() {
    this.ui.canvas.removeLayerGroup('pieces');
    _.each(this.model.get('pieces') || [], _.bind(this.drawPiece, this));
  },

  drawPiece : function(data) {
    var pos = data.x + ',' + data.y;
    var posLayer = this.ui.canvas.getLayer(pos);
    var color = data.player == 0 ? 'white' : 'black';
    this.ui.canvas.drawImage({
      layer : true, name : 'piece:' + posLayer.x + ',' + posLayer.y, group : 'pieces',
      source : '/assets/pieces/' + color + '/' + pieceMap[data.piece] + '.png',
      x : posLayer.x + 5, y : posLayer.y + 5,
      width : posLayer.width - 10, height : posLayer.height - 10,
      fromCenter : false
    });
  },

  drawPositions : function() {
    for (var x = 1; x <= 8; x++) {
      for (var y = 1; y <= 8; y++) {
        this.ui.canvas.drawRect({
          layer : true, name : x + ',' + y, group: 'board',
          fillStyle : ((x + y) % 2 == 0) ? '#B89655' : '#FFD175',
          x : (x - 1) * 60, y : (8 - y) * 60,
          width : 60, height : 60,
          fromCenter : false
        });
      }
    }
  }
});
