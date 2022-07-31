import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  queryParams: {
    // search: {
    //   refreshModel: true
    // }
  },
  dataService: service("data"),
  model() {
    //return this.get("dataService").getBooks(search);

  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set("isLoading", true)
    controller.updateBooks();
  }
});
