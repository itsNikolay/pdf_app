var ImageUploader = function(fileInput) {
  this.fileInput = fileInput;
};

ImageUploader.prototype.upload = function() {
  var data = {
    files: this.fileInput.readers.map(function(reader) {
      return reader.result;
    })
  };

  axios
    .post('/pdf_documents.json', data)
    .then(function (onSuccess, response) {

      onSuccess && onSuccess(response);
    }.bind(null, this.onSuccess))
    .catch(function (error) {
      console.log(error);
    });
};
