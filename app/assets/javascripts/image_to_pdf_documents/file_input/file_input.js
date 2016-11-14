var FileInput = function (input) {
  this.input = input;
  this.input.onchange = this.inputChanged.bind(this);
  this.readers = [];
};

MicroEvent.mixin(FileInput);

FileInput.prototype.inputChanged = function(e) {
  [].forEach.call(this.input.files, this.readFile.bind(this));
};

FileInput.prototype.readFile = function(file) {
  var imageReader = new ImageReader();
  imageReader.on('read', this.addFile.bind(this));
  imageReader.read(file);
};

FileInput.prototype.addFile = function(imageReader) {
  this.readers.push(imageReader);

  if (this.readers.length === this.input.files.length) {
    this.fire('readers:finished', this.readers);
  }
};

FileInput.prototype.clearReaders = function() {
  this.readers = [];
  this.input.value = '';
};
