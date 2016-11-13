var ImageUploader = function(fileInput) {
  this.fileInput = fileInput;
};

ImageUploader.prototype.upload = function() {
  var path, method;
  var pdfDocumentId = this.fileInput.pdfDocumentId;
  var data = {
    files: this.fileInput.readers.map(function(reader) {
      return reader.result;
    })
  };

  if (pdfDocumentId) {
    path = '/pdf_documents/'+pdfDocumentId+'.json';
    method = 'put';
  } else {
    path = '/pdf_documents.json';
    method = 'post';
  }

  axios[method](path, data)
    .then(function (onSuccess, response) {
      onSuccess && onSuccess(response);
    }.bind(null, this.onSuccess))
    .catch(function (error) {
      console.log(error);
    });
};
