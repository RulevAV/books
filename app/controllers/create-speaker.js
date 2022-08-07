import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  dataService: service("data"),
  actions: {
    async createSpeaker(speaker) {
      const applicationLogger = get(this, 'applicationLogger');
      try {
        const newSpeaker = this.get("store").createRecord("speaker", speaker)
        await newSpeaker.save();

      } catch (error) {
        applicationLogger.log(this.target.currentURL,error.message)
      }

      this.transitionToRoute("speakers");
    },
  },
});
