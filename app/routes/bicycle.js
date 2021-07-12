import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
  dataService: service('data'),
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model({ search }) {
    if (search) {
      return this.store.query('bicycle', { q: search });
    }
    return this.get('store').findAll('bicycle')
  },

  
  actions: {
    loading() {
      return false;
    }
  }
});
