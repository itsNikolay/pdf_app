var ImageFile = function() {};

ImageFile.prototype.read = function(file, onready) {
  this.file = file;
  this.onready = onready;
  this.reader = new FileReader();
  this.reader.onload = this._buildDomElement.bind(this);
  this.reader.readAsDataURL(file);
};

ImageFile.prototype._buildDomElement = function(e) {
  this.result = this.reader.result;
  var image = new Image();
  image.height = 100;
  image.title = this.file.name;
  image.src = this.result;
  image.classList.add("preview-image");
  this.domElement = image;
  this.onready(this);
};
