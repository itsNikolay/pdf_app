var PreviewBlock = Backbone.NativeView.extend({
  el: document.querySelector('ul#preview'),

  events: {
    'click button.move-up':   'move',
    'click button.move-down': 'move'
  },

  move: function (e) {
    var neibourIncrement = e.target.classList.contains('move-up') ? 1 : -1;
    var images  = this.model.imageToPdfImages;
    var model   = images.get(e.target.dataset.id);
    var index   = images.models.indexOf(model);
    var neibour = images.at(index - neibourIncrement);
    if (neibour) {
      var newPos = neibour.get('position');
      var oldPos = model.get('position');
      model.set('position', newPos);
      neibour.set('position', oldPos);
    }
  },

  initialize: function() {
    this.listenTo(this.model.imageToPdfImages, 'update reset sort', this.render);
  },

  render: function() {
    this.el.innerHTML = this.imageEls();
    return this;
  },

  imageEls: function() {
    return this.model.imageToPdfImages.models.map(function(model) {
      return this.imageTemplate(model.attributes);
    }.bind(this)).join('');
  },

  imageTemplate: function(attributes) {
    var templ = document.querySelector('#template-image').innerHTML;
    return _.template(templ)(attributes);
  }
});
