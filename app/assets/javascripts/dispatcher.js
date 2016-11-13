window.onload = function () {
  var input    = document.querySelector('#files');
  var preview  = document.querySelector('#preview');
  var download = document.querySelector('#download');

  var fileInput = new FileInput(input);
  fileInput.onReady = function(_fileInput) {
    var imageUploader = new ImageUploader(_fileInput);

    imageUploader.onSuccess = function(response) {
      var data = response.data;
      data.pdf_files.map(function(pdfFile) {
        var url = pdfFile.file.url;
        var image = new PreviewImage(url)
        var element = image.domElement();
        preview.append(element);
      });
      fileInput.emptyReaders();

      fileInput.pdfDocumentId = data.id;
      download.href = '/pdf_documents/'+data.id;
    };

    imageUploader.upload()
  }
};
