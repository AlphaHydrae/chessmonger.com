
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

  initialize : function(options) {
    this.currentPlayerPlaying = options.currentPlayerPlaying;
    this.model.bind('change:player', this.renderPlayer, this);
  },

  onRender : function() {
    this.renderPlayer();
  },

  renderPlayer : function() {
    if (this.model.has('player')) {
      this.ui.player.text(this.model.get('player').get('name'));
    } else if (!App.user || this.currentPlayerPlaying) {
      var button = $('<button type="button" disabled="disabled" class="btn btn-info">Waiting for someone to join</button>');
      this.ui.player.html(button);
    } else {
      var button = $('<button type="button" class="join btn btn-primary">Join this game</button>');
      this.ui.player.html(button);
    }
  },

  join : function() {
    this.model.save({ player : App.user }, { wait : true });
  }
});

var ParticipationsList = Backbone.Marionette.CompositeView.extend({

  template : 'participations',
  itemView : ParticipationView,
  itemViewOptions : function(item) {
    return { model : item, currentPlayerPlaying : this.isCurrentPlayerPlaying() };
  },

  isCurrentPlayerPlaying : function() {
    return !!this.collection.find(function(participation) {
      return App.user && participation.has('player') && participation.get('player').id == App.user.id;
    })
  }
});
