var ImageToPdfImages = Backbone.Collection.extend({
  model: ImageToPdfImage,

  addData: function(file) {
    var reader = new FileReader();
    reader.onload = this.addImage.bind(this);
    reader.readAsDataURL(file);
  },

  addImage: function(e) {
    var result = e.target.result;
    this.push({ attachment_data: result });
  }
});
