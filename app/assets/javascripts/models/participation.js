
var Participation = Backbone.RelationalModel.extend({
  urlRoot : '/participations',
  relations : [
    {
      type : 'HasOne',
      relatedModel : 'User',
      key : 'player',
      keyDestination : 'player_id',
      includeInJSON : 'id'
    }
  ]
});

var Participations = Backbone.Collection.extend({
  model : Participation
});
