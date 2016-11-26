var DownloadLink = Backbone.NativeView.extend({
  el: document.querySelector('a#download'),

  initialize: function () {
    this.listenTo(this.model, 'change:id', this.buildLink);
  },

  buildLink: function (model, id) {
    var link = model.url()+'.pdf';
    this.el.href = link;
  },
});
