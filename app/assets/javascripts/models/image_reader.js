var ImageReader = Backbone.Model.extend({
  read: function(file) {
    var reader = new FileReader();
    reader.onload = this.onLoad.bind(this);
    reader.readAsDataURL(file);
  },

  onLoad: function(e) {
    this.set('result', e.target.result);
  }
});
