
var AppModel = Backbone.RelationalModel.extend({

  allModels : function() {
    return [ this ];
  }
});

var AppCollection = Backbone.Collection.extend({

  allModels : function() {
    return _.inject(this.models, function(memo, model) {
      return memo.concat(model.allModels());
    }, []);
  }
});
