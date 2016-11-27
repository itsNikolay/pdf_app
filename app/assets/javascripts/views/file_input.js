var FileInput = Backbone.NativeView.extend({
  el: document.querySelector('input#files'),

  events: {
    'change': 'open'
  },

  open: function(e) {
    var fileOpener = new FileOpener();
    fileOpener.open(e.target.files);
    fileOpener.on('finished', this.addImages, this);
  },

  addImages: function (dataArr) {
    var startFrom = this.model.imageToPdfImages.length + 1;
    var records = dataArr.map(function(data, i) {
      return {
        attachment_data: data,
        position:        startFrom + i
      };
    });

    this.model.imageToPdfImages.add(records);
  },
});
