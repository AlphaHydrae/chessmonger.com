
var GameForm = Backbone.Marionette.ItemView.extend({

  template : 'gameForm',
  ui : {
    variant : '#game_variant'
  },

  setData : function(data) {
    _.each(data.variants, _.bind(this.addVariant, this));
  },

  addVariant : function(variant) {
    this.ui.variant.append($('<option />').val(variant.name).text(variant.human_name));
  }
});
