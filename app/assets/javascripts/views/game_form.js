
var GameForm = Backbone.Marionette.ItemView.extend({

  template : 'gameForm',
  ui : {
    variant : '#game_variant'
  },

  events : {
    'click .btn' : 'create'
  },

  setData : function(data) {
    _.each(data.variants, _.bind(this.addVariant, this));
    this.gameModel = new Game({ variant : data.variants[0].name, board : data.variants[0].board });
  },

  addVariant : function(variant) {
    this.ui.variant.append($('<option />').val(variant.name).text(variant.human_name));
  },

  create : function() {
    this.gameModel.save();
  }
});
