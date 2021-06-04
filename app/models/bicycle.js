import DS from 'ember-data';

export default DS.Model.extend({
  brand: DS.attr('string'),
  pricePerHour: DS.attr('number'),

  trips: DS.hasMany('trip')
});
