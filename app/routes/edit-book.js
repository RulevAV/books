import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { set } from "@ember/object";

export default Route.extend({
  dataService: service("data"),

  model({ id }) {
    return this.get("dataService").getBook(id);
  },

  setupController(controller, model) {
    this._super(...arguments);

    set(controller, "temp", model);
  }
});
