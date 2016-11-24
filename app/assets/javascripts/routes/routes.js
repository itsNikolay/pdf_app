var Workspace = Backbone.Router.extend({
  routes: {
    "images_to_pdf": 'help'
  },

  help: function() {
    var container = document.querySelector('#container');
    var preview = document.createElement('ul');
    preview.id = 'preview';
    var readers = new ReadersCollection();
    var fileInput = new FileInput({
      collection: readers
    }).render();
    var previewBlock = new PreviewBlock({
      collection: readers
    });
    container.append(fileInput.el)
    container.append(preview)
    preview.append(previewBlock.el)
  }
});

