var FileInput = function (input) {
  this.input = input;
  this.input.onchange = this.inputChanged.bind(this);
  this.readers = [];
};

FileInput.prototype.inputChanged = function(e) {
  [].forEach.call(this.input.files, this.readFile.bind(this));
};

FileInput.prototype.readFile = function(file) {
  var imageReader = new ImageReader();
  var onFileReady = function(imageReader) {
    this.addFile(imageReader);
  };
  imageReader.read(file, onFileReady.bind(this));
};

FileInput.prototype.addFile = function(imageReader) {
  this.readers.push(imageReader);

  if (this.readers.length === this.input.files.length) {
    this.fireOnReady(this)
  }
};

FileInput.prototype.fireOnReady = function(fileInput) {
  this.onReady && this.onReady(fileInput);
};

FileInput.prototype.emptyReaders = function(fileInput) {
  this.readers = [];
  this.input.value = '';
};
