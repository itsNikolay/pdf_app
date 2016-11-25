var Workspace = Backbone.Router.extend({
  routes: {
    'images_to_pdf_document': 'imagesToPdf'
  },

  imagesToPdf: function() {
    var readers = new ReadersCollection();
    new FileInput({ collection: readers });
    new PreviewBlock({ collection: readers });
  }
});

