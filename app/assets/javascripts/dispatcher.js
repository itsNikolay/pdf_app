window.onload = function () {
  var input    = document.querySelector('#files');
  var preview  = document.querySelector('#preview');
  var download = document.querySelector('#download');

  var fileInput = new FileInput(input);
  var previewContainer = new PreviewContainer(preview);
  var imageUploader = new ImageUploader();
  var downloadLink = new DownloadLink(download);

  imageUploader.on('ajax:success', function(response) {
    var list = new PreviewImageList(response);
    var elements = list.elements();
    previewContainer.appendAll(elements);
  });
  imageUploader.on('ajax:success', downloadLink.refresh.bind(downloadLink));



  fileInput.on('readers:finished',
    imageUploader.upload.bind(imageUploader, fileInput.readers)
  );
};
