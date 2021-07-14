import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
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

export default Component.extend(Validations, {
  store: service(),
  isFormValid: computed.alias('validations.isValid'),
  actions: {
    async saveTrip(e) {
      e.preventDefault();
      if (this.get('isFormValid')) {
        this.get('onSubmit')({
          rentPoint: this.get('rentPoint'),
          rentHours: this.get('rentHours'),
          rentDate: this.get('rentDate'),
          bicycle: this.get('bicycle')
        });
      }
    },

    searchBicycle(query) {
      return this.get('store').query('bicycle', { q: query })
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      rentPoint: this.get('trip.rentPoint'),
      rentHours: this.get('trip.rentHours'),
      rentDate: this.get('trip.rentDate'),
      bicycle: this.get('trip.bicycle')
    });
  },
});
