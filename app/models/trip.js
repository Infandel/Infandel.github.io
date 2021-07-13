import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  rentHours: [
    validator('ds-error'),
    validator('presence', true),
    validator('number', {
      allowString: false,
      integer: true,
      gt: 1,
      lte: 1000
    })
  ],
  rentPoint: [
    validator('ds-error'),
    validator('presence', true),
    validator('length', {
      min: 1,
      max: 64
    })

  ],
  rentDate: [
    validator('ds-error'),
    validator('presence', true),
    validator('format', {
      regex: /^\d{4}-\d{2}-\d{2}$/,
      message: 'Date should be in a format YYYY-MM-DD'
    })
  ]
});

export default DS.Model.extend(Validations, {
  rentPoint: DS.attr('string'),
  rentHours: DS.attr('number'),
  rentDate: DS.attr('date-string'),
  bicycleId: DS.attr('number'),
  
  bicycle: DS.belongsTo('bicycle')
});