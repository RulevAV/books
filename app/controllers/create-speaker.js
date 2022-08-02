import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service("data"),
  actions: {
    async createSpeaker(speaker) {
      const newSpeaker = this.get("store").createRecord("speaker", speaker);
      await newSpeaker.save();
      this.transitionToRoute("speakers");
    },
  },
});
