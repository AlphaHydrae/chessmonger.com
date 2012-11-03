
var GameInfoView = Backbone.Marionette.Layout.extend({

  template : 'gameInfo',
  regions : {
    participations : '.participations'
  },

  onRender : function() {
    this.participations.show(new ParticipationsList({ collection : this.model.get('participations') }));
  },

  setData : function(data) {
  }
});
