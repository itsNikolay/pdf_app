var FileOpener = Backbone.Model.extend({
  open: function (files) {
    this.count = 0;
    this.size  = files.length;
    this.dataArr = [];

    for (var i = 0; i < files.length; i++) {
      this.read(files[i]);
    }
  },

  read: function(file) {
    var reader = new FileReader();
    reader.onload = this.issue.bind(this);
    reader.readAsDataURL(file);
  },

  issue: function(e) {
    this.dataArr.push(e.target.result);

    if (++this.count === this.size)
      this.trigger('finished', this.dataArr) && (this.count = 0);
  },
});
