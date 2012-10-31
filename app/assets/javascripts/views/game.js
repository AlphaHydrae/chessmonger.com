
var GameInfoView = Backbone.Marionette.Layout.extend({

  template : 'gameInfo',
  regions : {
    participations : '.participations'
  },

  onRender : function() {
    this.participations.show(new ParticipationsList({ collection : this.model.get('participations') }));
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

  events : {
    'click a' : 'openGame'
  },

  onRender : function() {
    this.renderVariant();
    this.ui.creator.text(this.model.get('creator').get('name'));
    this.ui.createdAt.text(this.model.get('createdAt'));
  },

  renderVariant : function() {
    this.ui.variant.html($('<a />').attr('href', this.model.url()).text(this.model.humanVariant()));
  },

  openGame : function() {
    App.router.navigate(this.model.url().replace(/^\//, ''), { trigger : true });
    return false;
  }
});

var LatestGames = Backbone.Marionette.CompositeView.extend({
  template : 'latestGames',
  itemView : GameRow,
  itemViewContainer : 'tbody',
  emptyView : NoGameRow
});
