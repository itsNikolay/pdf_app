var ImagePreview = Backbone.NativeView.extend({
  template: _.template(
    '<li class="preview-container">'+
      '<div class="preview-hand">'+
      '</div>'+
      '<image class="preview-image" src="<%= image %>" height="100" />'+
    '</li>'
  ),

  render: function() {
    this.el.innerHTML = this.template(this.model.attributes);
    return this;
  }
});
