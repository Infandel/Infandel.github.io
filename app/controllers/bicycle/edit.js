import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveBicycle(bicycle) {
      let bicycleModel = this.get('model');
      bicycleModel.set('brand', bicycle.brand);
      bicycleModel.set('pricePerHour', bicycle.pricePerHour);

      await bicycleModel.save();

      this.transitionToRoute('bicycle.index');
    }
  }
});
