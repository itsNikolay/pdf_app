var ImageToPdfImages = Backbone.Collection.extend({
  model: ImageToPdfImage,
  comparator: 'position',

  initialize: function () {
    this.on('change:position', this.changePosition, this);
  },

  changePosition: function () {
    this.reset(this.models);
  },

  openFiles: function (files) {
    for (var i = 0, l = files.length; i < l; i++) {
      this.openFile(files[i]);
    }
  },

  openFile: function(file) {
    var reader = new FileReader();
    reader.onload = this.addImage.bind(this);
    reader.readAsDataURL(file);
  },

  addImage: function(e) {
    var result = e.target.result;
    this.add({ attachment_data: result, position: this.length });
  }
});
