window.onload = function () {
  var input = document.querySelector('#pdf_document_files');
  var fileInput = new FileInput(input);
  var preview = document.querySelector('#preview');
  var form = document.querySelector('#new_pdf_document');

  form.onsubmit = function(e) {
    e.preventDefault();
    console.log(fileInput.files);

    var data = {
      files: fileInput.files.map(function(previewFile) {
        return previewFile.result;
      })
    };

    axios
      .post('/pdf_documents.json', data)
      .then(function (response) {
        console.log(response);
        var urls = response.pdf_files.map(function(pdfFile) {
          return pdfFile.file.url;
        });
        urls.forEach(function(url) {
          var element = new PreviewImage(url).domElement;
          preview.append(element);
        })
      }).catch(function (error) {
        console.log(error);
      });
  };
};
