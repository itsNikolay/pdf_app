var ImageToPdfDocument = Backbone.Model.extend({
  urlRoot : '/images_to_pdf_documents',

  defaults: {
    image_to_pdf_images: [],
    image_to_pdf_images_attributes: []
  },

  initialize: function() {
    this.imageToPdfImageAttributes = new ImageToPdfImageAttributes();
    this.listenTo(this.imageToPdfImageAttributes, 'add', this.updateAttributes);
    this.on('change:image_to_pdf_images_attributes', function() { this.save(); })
  },

  updateAttributes: function() {
    this.set('image_to_pdf_images_attributes', this.imageToPdfImageAttributes.toJSON());
    this.imageToPdfImageAttributes.reset([]);
  },

  addFromData: function (dataArr) {
    var startFrom = this.get('image_to_pdf_images').length;
    this.imageToPdfImageAttributes.addFromData(dataArr, startFrom);
  },
});
