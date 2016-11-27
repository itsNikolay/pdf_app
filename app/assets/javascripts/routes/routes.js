var Workspace = Backbone.Router.extend({
  routes: {
    'images_to_pdf_documents': 'imagesToPdfDocuments'
  },

  imagesToPdfDocuments: function() {
    var imageToPdfDocument = new ImageToPdfDocument();
    var fileInput = new FileInput();
    new PreviewBlock({ model: imageToPdfDocument });
    new DownloadForm({ model: imageToPdfDocument });

    fileInput.on('finished', imageToPdfDocument.addFromData, imageToPdfDocument);
  }
});

