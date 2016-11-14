var AppendImages = function(fileInput, previewEl, downloadEl) {
  this.fileInput = fileInput;
  this.previewEl = previewEl;
  this.downloadEl = downloadEl;
}

AppendImages.prototype.appendImages = function() {
  var imageUploader = new ImageUploader(this.fileInput);

  imageUploader.onSuccess = function(response) {
    var data = response.data;
    data.pdf_files.map(function(pdfFile) {
      var url = pdfFile.file.url;
      var image = new PreviewImage(url)
      var domImage = image.domElement();
      this.previewEl.append(domImage);
    }.bind(this));
    this.fileInput.emptyReaders();

    this.fileInput.pdfDocumentId = data.id;
    this.downloadEl.href = '/pdf_documents/'+data.id;
  }.bind(this);

  imageUploader.upload()
}
