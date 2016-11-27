var ImageToPdfImageAttributes = Backbone.Collection.extend({
  model: ImageToPdfImage,

  addFromData: function(dataArr, startFrom) {
    var records = dataArr.map(function(data, i) {
      return { attachment_data: data, position: startFrom + i };
    });

    this.add(records);
  }
});
