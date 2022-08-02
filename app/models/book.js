import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  author: DS.attr(),
  sumPages: DS.attr(),
  tags: DS.attr(),
  averageRating: DS.attr(),
  uRLcover: DS.attr(),
  uRLDescription: DS.attr(),

  report: DS.hasMany("report")
});
