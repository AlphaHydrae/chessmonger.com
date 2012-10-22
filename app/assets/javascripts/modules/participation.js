
var Participation = Backbone.Model.extend({
  urlRoot : '/participations'
});

var Participations = Backbone.Collection.extend({
  model : Participation
});

var ParticipationView = Backbone.Marionette.ItemView.extend({

  tagName : 'div',
  className : 'well',

  template : 'participation',
  ui : {
    player : '.player'
  },

  events : {
    'click .join' : 'join'
  },

  onRender : function() {
    if (this.model.has('player')) {
      this.ui.player.text(this.model.get('player').name);
    } else {
      var button = $('<button type="button" class="join btn btn-primary">Join this game</button>');
      this.ui.player.html(button);
    }
  },

  join : function() {
    this.model.save({ participation : { player_id : 1 } });
  }
});

var ParticipationsList = Backbone.Marionette.CompositeView.extend({

  template : 'participations',
  itemView : ParticipationView,
});
