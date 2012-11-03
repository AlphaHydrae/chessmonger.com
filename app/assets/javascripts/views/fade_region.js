
var FadeRegion = Backbone.Marionette.Region.extend({

  open : function(view) {
    this.$el.hide();
    this.$el.html(view.el);
    this.$el.fadeIn('fast');
  }
});
