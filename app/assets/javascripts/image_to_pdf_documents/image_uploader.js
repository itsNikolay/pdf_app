var ImageUploader = function() {};

MicroEvent.mixin(ImageUploader);

ImageUploader.prototype.upload = function(readers) {
  var path, method, data;
  data = {
    images: readers.map(function(reader) {
      return reader.reader.result;
    })
  };

  if (this.pdfDocumentId) {
    path   = '/image_to_pdf_documents/'+this.pdfDocumentId+'.json';
    method = 'put';
  } else {
    path   = '/image_to_pdf_documents.json';
    method = 'post';
  }

  axios[method](path, data)
    .then(function (response) {
      this.pdfDocumentId = response.data.id;
      this.fire('ajax:success', response);
    }.bind(this))
    .catch(function (error) {
      console.log(error);
      this.fire('ajax:error', error);
    }.bind(this));
};
