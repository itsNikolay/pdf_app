var ImageToPdfImage = Backbone.Model.extend({
  url: function () {
    var documentId = this.get('images_to_pdf_document_id');
    var id = this.id;
    return '/images_to_pdf_documents/'+documentId+'/images_to_pdf_images/'+id;
  },

  defaults: {
    id: null,
    attachment: {}
  },

  moveLowerUrl: function () {
    var url = this.url()+'/move_lower';
    this.save({}, { url: url });
  },

  moveHigherUrl: function () {
    var url = this.url()+'/move_higher';
    this.save({}, { url: url });
  },
});
