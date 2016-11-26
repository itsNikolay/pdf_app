var Workspace = Backbone.Router.extend({
  routes: {
    'images_to_pdf_documents': 'imagesToPdfDocuments'
  },

  imagesToPdfDocuments: function() {
    var imageToPdfDocument = new ImageToPdfDocument();
    var fileInput = new FileInput({ model: imageToPdfDocument });
    new PreviewBlock({ model: imageToPdfDocument });
    new DownloadLink({ model: imageToPdfDocument });
    fileInput.on('finished', function() { this.model.save(); })
  }
});

