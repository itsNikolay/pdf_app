var DownloadForm = Backbone.NativeView.extend({
  el: 'form#download-form',

  initialize: function () {
    this.listenTo(this.model, 'change:id', this.buildLink);
  },

  buildLink: function (model, id) {
    var link = model.url()+'.pdf';
    this.el.action = link;
    this.el.querySelector('button').disabled = false;
  },
});
