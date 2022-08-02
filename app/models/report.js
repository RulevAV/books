import DS from 'ember-data';

export default DS.Model.extend({
  dataReport: DS.attr(),
  rating_book: DS.attr(),
  URLPresentation: DS.attr(),
  URLVideo: DS.attr(),
  Review: DS.attr(),

  books: DS.belongsTo("book"),
  speakers: DS.belongsTo("speaker"),
  meetings: DS.belongsTo("meeting")
});
