var ImageReader = function() {};

MicroEvent.mixin(ImageReader);

ImageReader.prototype.read = function(file) {
  this.file = file;

  this.reader = new FileReader();
  this.reader.onload = this.onLoad.bind(this);
  this.reader.readAsDataURL(file);
};

ImageReader.prototype.onLoad = function() {
  this.fire('read', this);
};
