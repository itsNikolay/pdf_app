var FileInput = Backbone.NativeView.extend({
  id: 'files',
  tagName: "input",
  className: "document-row",

  attributes: {
    type: 'file',
    accept: 'image/png,image/gif,image/jpeg',
    multiple: 'multiple'
  },

  events: {
    'change': 'open',
    'finished': 'finish'
  },

  open: function() {
    [].forEach.call(this.el.files, this.collection.addFile.bind(this.collection));
  }
});
