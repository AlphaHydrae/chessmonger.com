
var Game = Backbone.RelationalModel.extend({

  urlRoot : '/games',
  idAttribute : 'key',

  relations : [
    {
      type : 'HasOne',
      relatedModel : 'User',
      key : 'creator'
    },
    {
      type : 'HasOne',
      relatedModel : 'Board',
      key : 'board'
    },
    {
      type : 'HasMany',
      relatedModel : 'Participation',
      key : 'participations'
    }
  ],

  humanVariant : function() {
    return I18n.t('chessmonger.variants.' + this.get('variant'));
  }
});

var Games = Backbone.Collection.extend({
  model : Game
});
