import Route from '@ember/routing/route';

export default Route.extend({  

  //   model() {
  //     return Ember.RSVP.hash({
  //         trips : this.store.findAll('trip'),
  //         bicycles : this.store.findAll('bicycle')    
  //     });
  // },

  
  
  model() {   
    return this.get('store').findAll('trip');
  },

  actions: {
    loading() {
      return false;
    }
  },
  
  
});