var PreviewImageList = function(response) {
  this.response = response;
};

PreviewImageList.prototype.elements = function() {
  var data = this.response.data;
  return data.pdf_files.map(function(pdfFile) {
    var url = pdfFile.file.url;
    var image = new PreviewImage(url)
    return image.domElement();
  });
};
