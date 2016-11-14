window.onload = function () {
  var input    = document.querySelector('#files');
  var preview  = document.querySelector('#preview');
  var download = document.querySelector('#download');

  var fileInput = new FileInput(input);
  var previewContainer = new PreviewContainer(preview);
  var imageUploader = new ImageUploader();
  var downloadLink = new DownloadLink(download);

  fileInput.on('readers:finished', imageUploader.upload.bind(imageUploader, fileInput));
  imageUploader.on('ajax:success', fileInput.clearReaders.bind(fileInput));
  imageUploader.on('ajax:success', downloadLink.refresh.bind(downloadLink));
  imageUploader.on('ajax:success', function(response) {
    var list = new PreviewImageList(response);
    var elements = list.elements();
    previewContainer.appendAll(elements);
  });
};
