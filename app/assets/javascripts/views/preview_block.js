var PreviewBlock = Backbone.NativeView.extend({
  el: document.querySelector('ul#preview'),

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function() {
    this.el.innerHTML = this.imageEls();
    return this;
  },

  imageEls: function() {
    return this.collection.models.map(function(model) {
      return this.imageTemplate(model.attributes);
    }.bind(this)).join('');
  },

  imageTemplate: function(attributes) {
    var templ = document.querySelector('#template-image').innerHTML;
    return _.template(templ)(attributes);
  }
});
