
var UserView = Backbone.Marionette.ItemView.extend({

  tagName : 'ul',
  className : 'nav pull-right',
  template : 'user',
  ui : {
    logged : '.logged',
    login : '.login',
    username : '.logged .username',
    dropdownLink : '.dropdown-toggle',
    logoutLink : '.logged .logout'
  },

  events : {
    'click .login a' : 'login',
    'click .logged .logout' : 'logout'
  },

  initialize : function() {
    this.bindTo(App.vent, 'user:login', this.update);
    this.bindTo(App.vent, 'user:logout', this.update);
  },

  onRender : function() {
    this.ui.login.hide();
    this.ui.logged.hide();
  },

  login : function() {
    App.modal(new LoginView());
  },

  logout : function() {
    this.ui.dropdownLink.dropdown('toggle');
    App.vent.trigger('user:logout');
    $.ajax({
      url : this.ui.logoutLink.attr('href'),
      type : 'delete'
    });
    return false;
  },

  update : function(user) {
    if (user) {
      user = User.findOrCreate(user);
      this.ui.login.hide();
      this.ui.logged.show();
      this.ui.username.text(user.get('name'));
    } else {
      this.ui.login.show();
      this.ui.logged.hide();
    }
  }
});
