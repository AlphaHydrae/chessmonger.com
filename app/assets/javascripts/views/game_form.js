
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
  },

  addVariant : function(variant) {
    this.ui.variant.append($('<option />').val(variant.variant).text(variant.human_variant));
  },

  create : function() {
    this.model.save();
  }
});
