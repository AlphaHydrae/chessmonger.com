
var RegisterView = Backbone.Marionette.ItemView.extend({

  template : 'register',
  ui : {
    form : 'form'
  },

  events : {
    'click .register' : 'register',
    'click .login' : 'login'
  },

  register : function() {
    $.ajax({
      url : this.ui.form.attr('action'),
      type : 'post',
      dataType : 'json',
      data : this.ui.form.serializeArray()
    }).done(_.bind(this.success, this)).fail(_.bind(this.failure, this));
  },

  success : function(response) {
    App.vent.trigger('user:login', response);
    App.hideModal();
  },

  failure : function(jqxhr) {
    console.log('failure');
    console.log(JSON.parse(jqxhr.responseText));
  },

  login : function() {
    App.modal(new LoginView());
  }
});
