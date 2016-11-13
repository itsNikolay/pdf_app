window.onload = function () {
  var input   = document.querySelector('#files');
  var preview = document.querySelector('#preview');
  var form    = document.querySelector('#new_pdf_document');

  var fileInput = new FileInput(input);
  fileInput.onReady = function(_fileInput) {
    var imageUploader = new ImageUploader(_fileInput);

    imageUploader.onSuccess = function(response) {
      var urls = response.data.pdf_files.map(function(pdfFile) {
        return pdfFile.file.url;
      });
      urls.forEach(function(url) {
        var image = new PreviewImage(url)
        var element = image.domElement();
        preview.append(element);
      });
      fileInput.emptyReaders();

      fileInput.pdfDocumentId = response.data.id;
    };

    imageUploader.upload()
  }
  var pdfDocumentForm = new PdfDocumentForm(form);
};
