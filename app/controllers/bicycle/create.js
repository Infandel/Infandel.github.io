import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveBicycle(bicycle) {
      let newBicycle = this.get('store').createRecord('bicycle', bicycle);
      newBicycle.serialize();
      await newBicycle.save();

      this.transitionToRoute('bicycle.index');
    },
  }
});
