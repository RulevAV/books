import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service("data"),
  init() {
    this._super(...arguments);

  },

  actions: {
    async updateSpeaker(speaker) {
      let speakerModel = this.get("model");
      speakerModel.set("firstName", speaker.firstName);
      speakerModel.set("lastName", speaker.lastName);
      speakerModel.set("patronymic", speaker.patronymic);

      await speakerModel.save();

      this.transitionToRoute("speakers");
    }
  },
});
