import Service from '@ember/service';
import ENV from 'bike-rent-app/config/environment'

export default Service.extend({
  getBicycles(search) {
    let queryParams = '';
    if (search) {
      queryParams=`?q=${search}`;
    }

    return fetch(`${ENV.backendURL}/bicycles${queryParams}`).then((response) => response.json());
  },

  getBicycle(id) {
    return fetch(`${ENV.backendURL}/bicycles/${id}`).then((response) => response.json());
  },

  deleteBicycle(bicycle) {
    return fetch(`${ENV.backendURL}/bicycles/${bicycle.id}`, { method: 'DELETE'});
  },

  createBicycle(bicycle) {
    return fetch(`${ENV.backendURL}/bicycles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bicycle)
    });
  },

  updateBicycle(bicycle) {
    return fetch(`${ENV.backendURL}/bicycles/${bicycle.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bicycle)
    });
  }
});

