import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service("data"),
  init() {
    this._super(...arguments);

  },

  actions: {
    async updateSpeaker(speaker) {
      await this.get("dataService").updateSpeaker(speaker);
      this.transitionToRoute("speakers");
    }
  },
});
