import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    // async deleteBicycle(bicycle) {
    //   await bicycle.destroyRecord();

    //   this.transitionToRoute('bicycle.index');
    // }
    async deleteBicycle() {
      try {
        let trips = this.model.trips.toArray();

        await this.model.destroyRecord();

        trips.forEach(trip => {
          trip.unloadRecord();
        });

        this.transitionToRoute('bicycle.index');
      }
      catch(e) {
        this.send('error', e);
      }
    }
  }
});
