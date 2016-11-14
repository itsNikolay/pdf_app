var PreviewContainer = function(previewEl) {
  this.previewEl = previewEl;
};

PreviewContainer.prototype.append = function(element) {
  this.previewEl.append(element);
};

PreviewContainer.prototype.appendAll = function(elements) {
  this.clear();
  elements.forEach(function(element) {
    this.append(element);
  }.bind(this));
};

PreviewContainer.prototype.clear = function() {
  this.previewEl.innerHTML = '';
};
