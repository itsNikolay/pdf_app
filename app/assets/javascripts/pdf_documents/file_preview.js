var FilePreview = function (input, preview) {
  this.input = input;
  this.preview = preview;
  this.input.onchange = this.inputChanged.bind(this);
  this.previewFiles = [];
};

FilePreview.prototype.inputChanged = function(e) {
  [].forEach.call(this.input.files, this.readAndPreview.bind(this));
};

FilePreview.prototype.readAndPreview = function(file) {
  var imagePreview = new ImagePreview();
  var onready = function(_imagePreview) {
    this.previewFiles.push(_imagePreview);
    this.preview.appendChild( _imagePreview.domElement );
  }
  imagePreview.read(file, onready.bind(this));
};
