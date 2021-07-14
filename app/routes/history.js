import Route from '@ember/routing/route';

export default Route.extend({

// I have no idea what i need to pass here 
//from power-select to make a proper if-check (tried almost all the params)

  model({ search }) {
    if (search) {
      return this.get('store').query('trip', { q: search });
    }
    return this.get('store').findAll('trip')
  },



  actions: {
    loading() {
      return false;
    }
  }, 
});