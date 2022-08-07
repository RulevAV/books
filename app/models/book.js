import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  author: DS.attr("string"),
  sumPages: DS.attr("number"),
  tags: DS.attr(),
  averageRating: DS.attr("number"),
  URLcover: DS.attr("string"),
  URLDescription: DS.attr("string"),

  report: DS.hasMany("report"),
  user: DS.belongsTo('user')
});
