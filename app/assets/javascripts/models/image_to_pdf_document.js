var ImageToPdfDocument = Backbone.Model.extend({
  urlRoot : '/images_to_pdf_documents',

  constructor: function() {
    this.imageToPdfImages = new ImageToPdfImages()
    Backbone.Model.apply(this, arguments);
  },

  toJSON: function() {
    return {
      image_to_pdf_images_attributes: this.imageToPdfImages.toJSON()
    };
  },
});
