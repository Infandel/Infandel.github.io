import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  // attrs: {
  //     trips: {
  //       serialize: 'records',
  //       deserialize: 'records'
  //     }
  //   },
  
  normalize(model, hash) {
    hash = this._super(...arguments)
    return hash;
  }, 
})