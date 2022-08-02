import DS from 'ember-data';

export default DS.Model.extend({
  dataReport: DS.attr(),
  rating_book: DS.attr(),
  URLPresentation: DS.attr(),
  URLVideo: DS.attr(),
  Review: DS.attr(),

  book: DS.belongsTo("book"),
  speaker: DS.belongsTo("speaker"),
  meeting: DS.belongsTo("meeting")
});
