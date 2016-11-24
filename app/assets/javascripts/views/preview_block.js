var PreviewBlock = Backbone.NativeView.extend({
  template: _.template('<%= collection %>'),

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function() {
    this.el.innerHTML = this.template({
      collection: this.collection.models.map(function(model) {
        return new ImagePreview({ model: model }).render().el.innerHTML;
      }).join("")
    });
    return this;
  }
});
