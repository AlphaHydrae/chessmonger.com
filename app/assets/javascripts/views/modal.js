
var ModalView = Backbone.Marionette.ItemView.extend({

  className : 'modal fade',
  template : false,

  onRender : function() {
    this.region = new Backbone.Marionette.Region({
      el : this.$el
    });
  },

  onClose : function() {
    this.region.close();
  }
});
