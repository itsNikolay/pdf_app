var FileInput = function (input) {
  this.input = input;
  this.input.onchange = this.inputChanged.bind(this);
  this.files = [];
};

FileInput.prototype.inputChanged = function(e) {
  [].forEach.call(this.input.files, this.readAndPreview.bind(this));
};

FileInput.prototype.readAndPreview = function(file) {
  var imageFile = new ImageFile();
  var onready = function(_imageFile) {
    this.files.push(_imageFile);
  };
  imageFile.read(file, onready.bind(this));
};
