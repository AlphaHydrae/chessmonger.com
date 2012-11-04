
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

  events : {
    'click a' : 'openGame'
  },

  onRender : function() {
    this.renderVariant();
    this.ui.creator.text(this.model.get('creator').get('name'));
    this.ui.createdAt.text(this.model.get('created_at'));
  },

  renderVariant : function() {
    this.ui.variant.html($('<a />').attr('href', this.model.url()).text(this.model.humanVariant()));
  },

  openGame : function() {
    App.goToPage(this.model.url(), { game : this.model });
    return false;
  }
});

var LatestGames = Games.extend({
  url : '/games/latest'
});

var LatestGamesView = Backbone.Marionette.CompositeView.extend({

  template : 'latestGames',
  itemView : GameRow,
  itemViewContainer : 'tbody',
  emptyView : NoGameRow,

  initialize : function() {
    this.bindTo(this, 'composite:rendered', this.fetchGames);
  },

  fetchGames : function() {
    this.collection.fetch();
  }
});
