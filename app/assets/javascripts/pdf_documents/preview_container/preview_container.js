var PreviewContainer = function(previewEl) {
  this.previewEl = previewEl;
};

PreviewContainer.prototype.append = function(element) {
  this.previewEl.append(element);
};


PreviewContainer.prototype.appendAll = function(elements) {
  elements.forEach(function(element) {
    this.append(element);
  }.bind(this));
};
