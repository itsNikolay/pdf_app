//var FileInput = function (input) {
  //this.input = input;
  //this.input.onchange = this.inputChanged.bind(this);
  //this.readers = new ReadersCollection();
//};

//MicroEvent.mixin(FileInput);

//FileInput.prototype.inputChanged = function(e) {
  //[].forEach.call(this.input.files, this.readFile.bind(this));
//};

//FileInput.prototype.readFile = function(file) {
  //var imageReader = new ImageReader();
  //imageReader.on('change:result', this.addFile.bind(this));
  //imageReader.read(file);
//};

//FileInput.prototype.addFile = function(imageReader) {
  //this.readers.on('add', function() {
    //this.readers.isFinished(this.input.files.length);
  //}, this);

  //this.readers.push(imageReader);
//};

//FileInput.prototype.clearReaders = function() {
  //this.readers = [];
  //this.input.value = '';
//};
