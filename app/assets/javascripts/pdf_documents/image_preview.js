var ImagePreview = function() {};

ImagePreview.prototype.read = function(file, onready) {
  this.file = file;
  this.onready = onready;
  this.reader = new FileReader();
  this.reader.addEventListener("load", this.buildDomElement.bind(this));
  this.reader.readAsDataURL(file);
};

ImagePreview.prototype.buildDomElement = function(e) {
  var image = new Image();
  image.height = 100;
  image.title = this.file.name;
  image.src = this.reader.result;
  image.classList.add("preview-image");
  this.domElement = image;
  this.onready(this);
};
