import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(e) {
      e.preventDefault();

      this.onsubmit({
        id: this.get('idBicycle'),
        brand: this.get('brand'),
        pricePerHour: this.get('pricePerHour')
      });
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);  

    this.setProperties({
      idBicycle: this.get('bicycle.id') ? this.get('bicycle.id') : undefined,
      brand: this.get('bicycle.brand'),
      pricePerHour: this.get('bicycle.pricePerHour')
    });
  },
});
