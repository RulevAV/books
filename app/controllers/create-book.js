import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service("data"),
  actions: {
    async createBook(book) {
      await this.get("dataService").createBook(book);
      this.transitionToRoute("books");
    },
  },
});
