import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ["search"],
  search: "",
  dataService: service("data"),
  session: service(),

  actions: {
    async deleteSpeaker(speaker) {
      await speaker.destroyRecord();
    },
    actionSearch(e) {
      e.preventDefault();
      this.send("RouteActionSearch");
    }
  }
});
