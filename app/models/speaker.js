import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),
  patronymic: DS.attr("string"),

  report: DS.hasMany("report")
});
