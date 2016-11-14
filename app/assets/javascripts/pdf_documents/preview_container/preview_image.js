var PreviewImage = function(url) {
  this.url = url;
};

PreviewImage.prototype.domElement = function() {
  var image = new Image();
  image.height = 100;
  image.src = this.url;
  image.classList.add("preview-image");
  return image;
};
