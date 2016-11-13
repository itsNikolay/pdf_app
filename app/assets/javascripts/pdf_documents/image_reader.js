var ImageReader = function() {};

ImageReader.prototype.read = function(file, onready) {
  this.file = file;
  this.onready = onready;

  this.reader = new FileReader();
  this.reader.onload = this.onLoad.bind(this);
  this.reader.readAsDataURL(file);
};

ImageReader.prototype.onLoad = function(e) {
  this.onready(this.reader);
};
