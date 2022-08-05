import Controller from "@ember/controller";
import { inject as service } from '@ember/service';
import ENV from 'books/config/environment';
import { get, set, computed } from '@ember/object';

export default Controller.extend({
  session: service(),
  i18n: service(),
  currentUser: service(),

  currentLocale: ENV.i18n.defaultLocale,
  
  actions: {
    async logout(e) {
      e.preventDefault();

      this.get('session').invalidate();
    },
    changeLocale(e) {
      set(this, 'currentLocale', e.target.value);
      set(this, 'i18n.locale', get(this, 'currentLocale'));
    }
  },

  init() {
    this._super(...arguments);
    set(this, 'i18n.locale', get(this, 'currentLocale'));
  }
});
