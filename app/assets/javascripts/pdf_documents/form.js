var PdfDocumentForm = function (form) {
  this.form = form;
  this.form.onsubmit = this.onSubmit.bind(this);
};

PdfDocumentForm.prototype.onSubmit = function(e) {
  e.preventDefault();
  var data = {
    files: fileInput.files.map(function(previewFile) {
      return previewFile.result;
    })
  };

  axios
    .post('/pdf_documents.json', data)
    .then(function (response) {
      console.log(response);
      console.log(response);
      var urls = response.data.pdf_files.map(function(pdfFile) {
        return pdfFile.file.url;
      });
      urls.forEach(function(url) {
        var image = new PreviewImage(url)
        var element = image.domElement();
        preview.append(element);
      })
    }).catch(function (error) {
      console.log(error);
    });
};
