//= require axios
//= require underscore
//= require backbone
//= require backbone.nativeview
//= require backbone.sync
//= require custom-responsive-menu
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routes

(function() {
  new Workspace();
  Backbone.history.start({pushState: true});
})();
