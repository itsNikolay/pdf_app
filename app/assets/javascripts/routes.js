var Routes = {
  images_to_pdf: function() {
    return '/images_to_pdf.json';
  },
  post_images_to_pdf: function(id) {
    return '/images_to_pdf/'+id+'.json';
  },
  images_to_pdf_pdf: function(id) {
    return '/images_to_pdf/'+id+'.pdf';
  }
};

