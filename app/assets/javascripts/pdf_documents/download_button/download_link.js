var DownloadLink = function(linkEl) {
  this.linkEl = linkEl;
};

DownloadLink.prototype.refresh = function(response) {
  var id = response.data.id;
  this.linkEl.href = '/pdf_documents/'+id+'.pdf';
};
