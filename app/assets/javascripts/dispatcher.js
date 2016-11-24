//window.onload = function () {
  //var body       = document.querySelector('body')
  //var dataset    = body.dataset;
  //var controller = dataset.controller;
  //var action     = dataset.action;

  //switch (controller) {
    //case 'images_to_pdf_documents':
      //if (action === 'index') {
        //var input    = document.querySelector('#files');
        //var preview  = document.querySelector('#preview');
        //var download = document.querySelector('#download');

        //var fileInput        = new FileInput(input);
        //var imageUploader    = new ImageUploader();
        //var downloadLink     = new DownloadLink(download);
        //var previewContainer = new PreviewContainer(preview);

        //fileInput.readers.on('finished', imageUploader.upload.bind(imageUploader));
        //fileInput.readers.on('finished', function() {
          //debugger;
        //});
        //imageUploader.on('ajax:success', fileInput.clearReaders.bind(fileInput));
        //imageUploader.on('ajax:success', downloadLink.refresh.bind(downloadLink));
        //imageUploader.on('ajax:success', function(response) {
          //var urls = response.data.image_to_pdf_images.map(function (el) {
            //return el.attachment.url;
          //});
          //var elements = PreviewImage.elements(urls);
          //previewContainer.append(elements);
        //});
      //}
      //break;

    //default:

  //}
//};
