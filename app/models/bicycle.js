import DS from 'ember-data';
import { computed } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  brand: [
    validator('ds-error'),
    validator('presence', true),
    validator('length', {
      min: 1,
      max: 64
    })
  ],
  pricePerHour: [
    validator('ds-error'),
    validator('presence', true),
    validator('number', {
      allowString: false,
      integer: true,
      gt: 1,
      lte: 100
    })
  ],
})

export default DS.Model.extend(Validations, {
  brand: DS.attr('string'),
  pricePerHour: DS.attr('number'),

  trips: DS.hasMany('trip'),

  averageRentTime: computed('trips.@each.rentHours', function() {
    return this.get('trips').reduce(function(sum, trip) {
      return sum += trip.get('rentHours');
    }, 0) / this.get('trips').get('length');
  })
});