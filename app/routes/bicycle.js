import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model({ search }) {
    return this.get('store').findAll('bicycle')
  },

  
  actions: {
    refreshBicycles() {
      this.refresh();
    },
    loading(transition, originRoute) {
      return false;
    }
  }
});
