import DS from 'ember-data';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'books/config/environment';

export default DS.JSONAPIAdapter.extend({
  session: service(),
  host: ENV.backendUrl,

  headers: computed(function() {
    let resultHeaders = {
      'Content-Type': 'application/json'
    };

    if (this.get('session.isAuthenticated')) {
      resultHeaders['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
    }

    return resultHeaders;
  }).volatile(),

  buildURL(modelName, id, snapshot, requestType, query) {
    let url = this._super(...arguments);
    if (modelName === 'speaker' && requestType === 'findRecord' && id) {
      url += '?_embed=reports';
    }

    if (modelName === 'book' && requestType === 'findRecord' && id) {
      url += '?_embed=reports';
    }

    if (modelName === 'meeting' && requestType === 'findRecord' && id) {
      url += '?_embed=reports';
    }

    if (modelName === 'meeting' && requestType === 'findAll') {
      url += '?_embed=reports';
    }

    if (modelName === 'meeting' && requestType === 'query') {
      url += '?_embed=reports';
    }
    return url;
  },

  handleResponse(status, headers, payload) {
    const meta = {
      total: headers['x-total-count'],
    };

    payload.meta = meta;

    return this._super(status, headers, payload);
  }
});
