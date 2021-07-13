import Controller from '@ember/controller';

export default Controller.extend({
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
