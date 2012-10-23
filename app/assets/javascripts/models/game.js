
var Game = Backbone.RelationalModel.extend({

  urlRoot : '/games',
  idAttribute : 'key',

  relations : [
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
  ]
});
