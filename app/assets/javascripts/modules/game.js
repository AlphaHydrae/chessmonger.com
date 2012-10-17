
var GameView = Backbone.Marionette.ItemView.extend({

  template : 'game',

  onRender : function() {
  }
});

$(function() {

  $('.game').each(function() {
    new Backbone.Marionette.Region({
      el : $(this)
    }).show(new GameView());
  });
});
