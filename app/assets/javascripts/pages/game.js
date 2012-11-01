
var GamePage = Backbone.Marionette.Layout.extend({

  template : 'game',
  regions : {
    board : '.board',
    panel : '.panel'
  },

  initialize : function(options) {
    this.boardModel = new Board();
    this.formView = new GameForm();
    this.bindTo(App.vent, 'page:contents', this.renderForm);
  },

  onRender : function() {
    this.board.show(new BoardView({ model : this.boardModel }));
    this.panel.show(this.formView);
  },

  renderForm : function(data) {
    this.boardModel.set('pieces', data.variants[0].board.pieces);
    this.panel.currentView.setData(data);
  }
});
