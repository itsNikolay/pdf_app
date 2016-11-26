var ImageToPdfDocument = Backbone.Model.extend({
  urlRoot : '/images_to_pdf_documents',

  constructor: function() {
    this.imageToPdfImages = new ImageToPdfImages({sort: true});
    Backbone.Model.apply(this, arguments);
  },

  parse: function(resp, opts) {
    this.imageToPdfImages.reset(resp.image_to_pdf_images, {sort: true});
    return resp;
  },

  toJSON: function() {
    return {
      image_to_pdf_images_attributes: this.imageToPdfImages.toJSON()
    };
  }
});
