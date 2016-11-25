var FileInput = Backbone.NativeView.extend({
  el: document.querySelector('input#files'),

  events: {
    'change': 'open'
  },

  initialize: function() {
    this.processedCount = 0;
    this.listenTo(this.model.imageToPdfImages, 'add', this.checkFinish);
  },

  open: function(e) {
    [].forEach.call(
      this.el.files,
      this.model.imageToPdfImages.addData.bind(this.model.imageToPdfImages)
    );
  },

  checkFinish: function() {
    if (this.el.files.length === ++this.processedCount)
      this.trigger('finished') && (this.processedCount = 0);
  }
});
