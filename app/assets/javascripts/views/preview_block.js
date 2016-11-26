var PreviewBlock = Backbone.NativeView.extend({
  el: document.querySelector('ul#preview'),

  events: {
    'click button.move-up':   'moveUp',
    'click button.move-down': 'moveDown'
  },

  moveUp: function (e) {
    var id = e.target.dataset.id;
    var model = this.model.imageToPdfImages.get(id);
    var ind = this.model.imageToPdfImages.models.indexOf(model);
    var neibour = this.model.imageToPdfImages.at(ind - 1);
    if (neibour) {
      var newPos = neibour.get('position');
      var oldPos = model.get('position');
      model.set('position', newPos);
      neibour.set('position', oldPos);
    }
  },

  moveDown: function (e) {
    var id = e.target.dataset.id;
    var model = this.model.imageToPdfImages.get(id);
    var ind = this.model.imageToPdfImages.models.indexOf(model);
    var neibour = this.model.imageToPdfImages.at(ind + 1);
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
