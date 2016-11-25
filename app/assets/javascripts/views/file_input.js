var FileInput = Backbone.NativeView.extend({
  el: document.querySelector('input#files'),

  events: {
    'change': 'open'
  },

  open: function(e) {
    [].forEach.call(
      this.el.files,
      this.collection.addData.bind(this.collection)
    );
  }
});
