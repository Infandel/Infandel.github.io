import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model({ search }) {
    if (search) {
      return this.get('store').query('bicycle', { q: search });
    }
    return this.get('store').findAll('bicycle')
  },

  
  actions: {
    loading() {
      return false;
    }
  }
});
