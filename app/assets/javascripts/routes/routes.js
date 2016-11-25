var Workspace = Backbone.Router.extend({
  routes: {
    'images_to_pdf_documents': 'imagesToPdfDocuments'
  },

  imagesToPdfDocuments: function() {
    var imageToPdfImages = new ImageToPdfImages();
    new FileInput({ collection: imageToPdfImages });
    new PreviewBlock({ collection: imageToPdfImages });
  }
});

