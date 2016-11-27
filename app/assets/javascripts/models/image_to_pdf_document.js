var ImageToPdfDocument = Backbone.Model.extend({
  urlRoot : '/images_to_pdf_documents',

  constructor: function() {
    this.imageToPdfImages = new ImageToPdfImages();
    this.imageToPdfImages.on('add', function() { this.save(); }, this);
    Backbone.Model.apply(this, arguments);
  },

  parse: function(resp, opts) {
    this.imageToPdfImages.reset(resp.image_to_pdf_images);
    return resp;
  },

  toJSON: function() {
    return {
      image_to_pdf_images_attributes: this.imageToPdfImages.toJSON()
    };
  }
});
