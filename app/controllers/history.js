import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  actions: {
    searchTrip(query) {
      return this.get('store').query('trip', { q: query })
    }
  }
});
