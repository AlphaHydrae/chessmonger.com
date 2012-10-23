
var ShowGamePage = Backbone.Marionette.Layout.extend({

  template : _.template('<div id="gamePage" />'),

  regions : {
    body : '#gamePage'
  },

  onRender : function() {
  }
});
