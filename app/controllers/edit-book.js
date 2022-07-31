import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service("data"),
  init() {
    this._super(...arguments);

  },

  actions: {
    async updateBook(book, uploadData) {
      await this.get("dataService").updateBook(book, uploadData);
      this.transitionToRoute("books");
    }
  },

});
