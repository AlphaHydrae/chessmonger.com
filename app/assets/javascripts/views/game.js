
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

var NoGameRow = Backbone.Marionette.ItemView.extend({
  tagName : 'tr',
  className : 'empty',
  template : _.template('<td colspan="3">No games</td>')
});

var GameRow = Backbone.Marionette.ItemView.extend({

  tagName : 'tr',
  template : 'gameRow',
  ui : {
    variant : '.variant',
    creator : '.creator',
    createdAt : '.createdAt'
  },

  onRender : function() {
    this.renderVariant();
    this.ui.creator.text(this.model.get('creator').get('name'));
    this.ui.createdAt.text(this.model.get('createdAt'));
  },

  renderVariant : function() {
    this.ui.variant.html($('<a />').attr('href', this.model.url()).text(this.model.humanVariant()));
  }
});

var LatestGames = Backbone.Marionette.CompositeView.extend({
  template : 'latestGames',
  itemView : GameRow,
  itemViewContainer : 'tbody',
  emptyView : NoGameRow
});
