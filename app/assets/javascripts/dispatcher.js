window.onload = function () {
  var input    = document.querySelector('#files');
  var preview  = document.querySelector('#preview');
  var download = document.querySelector('#download');

  var fileInput = new FileInput(input);
  var appendImages = new AppendImages(fileInput, preview, download);
  fileInput.on('ready', appendImages.appendImages.bind(appendImages));
};
