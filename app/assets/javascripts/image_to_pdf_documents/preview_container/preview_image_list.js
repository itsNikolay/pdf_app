var PreviewImageList = function(response) {
  this.response = response;
};

PreviewImageList.prototype.elements = function() {
  var data = this.response.data;
  return data.image_to_pdf_images.map(function(image) {
    var url = image.attachment.url;
    var image = new PreviewImage(url)
    return image.domElement();
  });
};
