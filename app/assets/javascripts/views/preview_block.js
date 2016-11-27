var PreviewBlock = Backbone.NativeView.extend({
  el: '#preview',

  events: {
    'click button.move-up':   'move',
    'click button.move-down': 'move',
    'click button.destroy':   'destroy'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  move: function (e) {
    var action = e.target.classList.contains('move-up') ? 'moveHigherUrl' : 'moveLowerUrl';
    var model = this.imageModel(e.target)
    model.on('request:success', function(_, resp) { this.set(resp.data); }, this.model);
    return model[action]();
  },

  destroy: function (e) {
    var model = this.imageModel(e.target)
    model.on('request:success', function(_, resp) { this.set(resp.data); }, this.model);
    return model.destroy();
  },

  imageModel: function (target) {
    var id     = target.dataset.id;
    var images = this.model.get('image_to_pdf_images');
    var attrs  = _.find(images, function(image) { return image.id == id; });
    return new ImageToPdfImage(attrs);
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
