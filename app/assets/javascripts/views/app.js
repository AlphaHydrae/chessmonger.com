
var AppView = Backbone.Marionette.Layout.extend({

  template : 'app',
  regions : {
    pageRegion : '#page'
  },
  ui : {
    menu : '#menu'
  },

  events : {
    'click .navbar .brand' : 'home'
  },

  initialize : function() {
    this.bindTo(App.vent, 'page:changing', this.showPage);
  },

  onRender : function() {
    this.ui.menu.append(new UserView().render().el);
  },

  showPage : function(page) {
    this.pageRegion.show(page);
  },

  home : function() {
    App.goToPage('/');
    return false;
  }
});
