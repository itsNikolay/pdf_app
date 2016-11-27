var PreviewBlock = Backbone.NativeView.extend({
  el: '#preview',

  events: {
    'click button.move-up':   'move',
    'click button.move-down': 'move'
  },

  move: function (e) {
    var action = e.target.classList.contains('move-up') ? 'moveHigherUrl' : 'moveLowerUrl';
    var id     = e.target.dataset.id;
    var images = this.model.get('image_to_pdf_images');
    var attrs  = _.find(images, function(image) { return image.id == id; });
    var model  = new ImageToPdfImage(attrs);
    model.on('request:success', function(_, resp) { this.set(resp.data); }, this.model);
    return model[action]();
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
