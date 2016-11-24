var DownloadLink = function(linkEl) {
  this.linkEl = linkEl;
};

DownloadLink.prototype.refresh = function(response) {
  var id = response.data.id;
  this.linkEl.href = Routes.images_to_pdf_pdf(id);
};
