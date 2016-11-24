function PreviewContainer(el) {
  this.el = el;
};

PreviewContainer.prototype = {
  append: function(els) {
    this.el.append.apply(this.el, els);
  },

  clear: function() {
    this.el.innerHTML = '';
  }
};
