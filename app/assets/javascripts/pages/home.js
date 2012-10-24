
var HomePage = Backbone.Marionette.Layout.extend({

  template : 'home',
  regions : {
    latestGames : '.latest'
  },

  initialize : function() {
    this.collection = new Games();
    this.bindTo(App.vent, 'page:contents', this.setContents);
  },

  onClose : function() {
    this.collection.forEach(function(model) {
      Backbone.Relational.store.unregister(model);
    });
  },

  setContents : function(contents) {
    this.collection.reset(contents);
  },

  onRender : function() {
    this.latestGames.show(new LatestGames({
      collection : this.collection
    }));
  }
});
