var PreviewBlock = Backbone.NativeView.extend({
  el: '#preview',

  events: {
    'click button.move-up':   'move',
    'click button.move-down': 'move'
  },

  // TODO: do it on backend
  move: function (e) {
    var id = e.target.dataset.id;
    var neibourIncrement = e.target.classList.contains('move-up') ? -1 : 1;
    var images  = this.model.get('image_to_pdf_images');
    var model   = _.find(images, function(image) { return image.id == id; })
    var index   = images.indexOf(model);
    var neibour = images[index + neibourIncrement];
    if (neibour) {
      var newPos = neibour['position'];
      var oldPos = model['position'];
      this.model.imageToPdfImageAttributes.add([
        { id: model.id,   position: newPos },
        { id: neibour.id, position: oldPos }
      ]);
    }
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.el.innerHTML = this.imageTemplate();
    return this;
  },

  imageTemplate: function() {
    var templ = document.querySelector('#template-image').innerHTML;
    return _.template(templ)(this.model.toJSON());
  }
});
