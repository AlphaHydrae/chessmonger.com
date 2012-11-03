
var Participation = AppModel.extend({
  urlRoot : '/participations',
  relations : [
    {
      type : 'HasOne',
      relatedModel : 'User',
      key : 'player',
      keyDestination : 'player_id',
      includeInJSON : 'id'
    }
  ],

  allModels : function() {
    return _.compact([ this, this.get('user') ]);
  }
});

var Participations = AppCollection.extend({
  model : Participation
});
