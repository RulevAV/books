import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service("data"),
  init() {
    this._super(...arguments);

  },

  actions: {
    async updateBook(book) {
      await this.get("dataService").updateBook(book);
      this.transitionToRoute("books");
    }
  },

  //setProperties

  // didReceiveAttrs() {
  //   this._super(...arguments);
  //   this.setProperties({

  //   });
  // },


});
