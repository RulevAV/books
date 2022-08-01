import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service("data"),
  actions: {
    async createSpeaker(speaker) {
      await this.get("dataService").createSpeaker(speaker);
      this.transitionToRoute("speakers");
    },
  },
});
