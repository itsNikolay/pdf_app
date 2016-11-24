function PreviewImage(url) {
  this.url = url;
  this.el = this.domElement();
};

PreviewImage.elements = function(urls) {
  return urls.map(function(url) {
    return new PreviewImage(url).el;
  });
};

PreviewImage.prototype = {
  domElement: function() {
    var element = document.createElement('div');
    element.classList.add('preview-container')
    element.append(this.hand())
    element.append(this.image())
    return element;
  },

  image: function() {
    var image = new Image();
    image.height = 100;
    image.src = this.url;
    image.classList.add("preview-image");
    return image;
  },

  hand: function() {
    var element = document.createElement('div');
    element.classList.add('preview-hand')
    return element;
  }
};

