function PdfDocumentModel(base64s) {
  this.base64s = base64s;
  this.data = { images: base64s }
};

MicroEvent.mixin(PdfDocumentModel);

PdfDocumentModel.prototype = {
  post: function(id) {
    if (id) {
      path   = Routes.post_images_to_pdf(id);
      method = 'put';
    } else {
      path   = Routes.images_to_pdf();
      method = 'post';
    }

    axios[method](path, this.data)
      .then(function (response) {
        this.id = response.data.id;
        this.fire('post:success', response);
      }.bind(this))
      .catch(function (error) {
        console.log(error);
        this.fire('post:error', error);
      }.bind(this));
  }
};
