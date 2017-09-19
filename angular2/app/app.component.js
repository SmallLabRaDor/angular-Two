(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>只有不断的充实自己，才可以立于不败之地</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));