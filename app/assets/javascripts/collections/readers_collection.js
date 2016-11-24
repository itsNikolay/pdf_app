var ReadersCollection = Backbone.Collection.extend({
  addFile: function(file) {
    var reader = new FileReader();
    reader.onload = this.addImage.bind(this);
    reader.readAsDataURL(file);
  },

  addImage: function(e) {
    var result = e.target.result;
    var image = new Image({ image: result });
    this.push(image);
  }
});
