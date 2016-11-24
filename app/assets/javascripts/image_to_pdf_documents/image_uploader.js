function ImageUploader() {};

MicroEvent.mixin(ImageUploader);

ImageUploader.prototype.upload = function(readers) {
  var path, method, data;
  data = {
    images: readers.map(function(reader) {
      return reader.reader.result;
    })
  };

  if (this.pdfDocumentId) {
    path   = Routes.post_images_to_pdf(this.pdfDocumentId);
    method = 'put';
  } else {
    path   = Routes.images_to_pdf();
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
