var FileInput = Backbone.NativeView.extend({
  el: document.querySelector('input#files'),

  events: {
    'change': 'open'
  },

  open: function() {
    [].forEach.call(this.el.files, this.collection.addFile.bind(this.collection));
  }
});
