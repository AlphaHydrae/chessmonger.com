
var Game = AppModel.extend({

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
      collectionType : 'Participations',
      key : 'participations'
    }
  ],

  toJSON : function() {
    return _.pick(this.attributes, 'variant');
  },

  humanVariant : function() {
    return I18n.t('chessmonger.variants.' + this.get('variant'));
  },

  allModels : function() {
    return _.compact([ this, this.get('creator'), this.get('board') ].concat(this.has('participations') ? this.get('participations').allModels() : []));
  }
});

var Games = AppCollection.extend({
  model : Game
});
