var ImageUploader = function() {};

MicroEvent.mixin(ImageUploader);

ImageUploader.prototype.upload = function(fileInput) {
  var path, method, data;
  data = {
    files: fileInput.readers.map(function(reader) {
      return reader.reader.result;
    })
  };

  if (this.pdfDocumentId) {
    path   = '/pdf_documents/'+this.pdfDocumentId+'.json';
    method = 'put';
  } else {
    path   = '/pdf_documents.json';
    method = 'post';
  }

  axios[method](path, data)
    .then(function (response) {
      this.pdfDocumentId = response.data.id;
      this.fire('ajax:success', response);
    }.bind(this))
    .catch(function (error) {
      console.log(error);
      this.fire('ajax:error', error)
    }.bind(this));
};
