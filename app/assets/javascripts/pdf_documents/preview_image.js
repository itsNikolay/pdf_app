var PreviewImage = function(url) {
  this.url = url;
  this.buildDomElement;
};

ImageFile.prototype.buildDomElement = function(e) {
  var image = new Image();
  image.height = 100;
  image.title = this.file.name;
  image.src = this.reader.result;
  image.classList.add("preview-image");
  this.domElement = image;
};
