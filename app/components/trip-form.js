import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  actions: {
    async saveTrip(e) {
      e.preventDefault();
      this.get('onSubmit')({
        point: this.get('point'),
        hours: this.get('hours'),
        bicycle: this.get('bicycle')
      });
    },

    searchBicycle(query) {
      return this.get('store').query('bicycle', { q: query })
    }
  },

  didReceiveAttrs() {
    this.setProperties({
      point: this.get('trip.point'),
      hours: this.get('trip.hours'),
      bicycle: this.get('trip.bicycle')
    });
  },
});
