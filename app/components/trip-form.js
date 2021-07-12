import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  actions: {
    async saveTrip(e) {
      e.preventDefault();
      this.get('onSubmit')({
        rentPoint: this.get('rentPoint'),
        rentHours: this.get('rentHours'),
        rentDate: this.get('rentDate'),
        bicycle: this.get('bicycle')
      });
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
