var ImageToPdfImageAttributes = Backbone.Collection.extend({
  model: ImageToPdfImage,

  addFromData: function(dataArr) {
    var records = dataArr.map(function(data, i) {
      return { attachment_data: data };
    });

    this.add(records);
  }
});
