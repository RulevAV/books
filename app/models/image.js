import DS from 'ember-data';

export default DS.Model.extend({
  img: DS.attr('string'),
  type: DS.attr('string'),
});
