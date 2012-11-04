
var LoginView = Backbone.Marionette.ItemView.extend({

  template : 'login',
  ui : {
    form : 'form'
  },

  events : {
    'click .login' : 'login',
    'click .register' : 'register'
  },

  login : function() {
    $.ajax({
      url : this.ui.form.attr('action'),
      type : 'post',
      dataType : 'json',
      data : this.ui.form.serializeArray()
    }).done(_.bind(this.goodLogin, this)).fail(_.bind(this.badLogin, this));
  },

  badLogin : function() {
    this.ui.form.find('.control-group').addClass('error');
  },

  goodLogin : function(response) {
    App.vent.trigger('user:login', response);
    App.hideModal();
  },

  register : function() {
    App.modal(new RegisterView());
  }
});
