import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  dataService: service("data"),
  init() {
    this._super(...arguments);
  },

  actions: {
    async updateSpeaker(speaker) {
      const applicationLogger = get(this, 'applicationLogger');

      try {
        let speakerModel = this.get("model");
        speakerModel.set("firstName", speaker.firstName);
        speakerModel.set("lastName", speaker.lastName);
        speakerModel.set("patronymic", speaker.patronymic);
        await speakerModel.save();
      } catch (error) {
        applicationLogger.log(this.target.currentURL, error.message)
      }

      this.transitionToRoute("speakers");
    }
  },
});
