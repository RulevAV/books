import Controller from '@ember/controller';

import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ["search"],
  search: "",
  dataService: service("data"),

  async getSpeakers() {
    const speakers = await this.get("dataService").getSpeakers(this.get("search"));
    this.set("speakers", speakers);
  },

  actions: {
    async deleteSpeaker(speaker) {
      await this.get("dataService").deleteSpeaker(speaker);
      const speakers = this.get("speakers").filter((e) => {
        return e.id !== speaker.id
      });
      this.set("speakers", speakers)
    },
    actionSearch(e) {
      e.preventDefault();
      this.getSpeakers();
    }
  }
});
