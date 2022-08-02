import DS from 'ember-data';

export default DS.Model.extend({
  dataMeeting: DS.attr("string"),

  reports: DS.hasMany("report")
});
