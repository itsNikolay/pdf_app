window.onload = function () {
  var fileInput = document.querySelector('#pdf_document_files');
  var preview = document.querySelector('#preview');
  var filePreview = new FilePreview(fileInput, preview);

  var form = document.querySelector('#new_pdf_document');
  form.onsubmit = function(e) {
    e.preventDefault();
    console.log(filePreview.previewFiles);

    var data = {
      files: filePreview.previewFiles.map(function(previewFile) {
        return previewFile.reader.result;
      })
    };

    axios
      .post('/pdf_documents.json', data)
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  };
};
