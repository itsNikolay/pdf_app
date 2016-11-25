//= require axios
//= require underscore
//= require backbone
//= require backbone.nativeview
//= require microevent
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routes
//= require_tree ./image_to_pdf_documents
//= require routes
//= require dispatcher

window.onload = function() {
  new Workspace();
  Backbone.history.start();
}
