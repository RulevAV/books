import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  queryParams: ["search"],
  search: "",
  dataService: service("data"),
  session: service(),

  actions: {
    async deleteSpeaker(speaker) {
      const applicationLogger = get(this, 'applicationLogger');
      try {
        await speaker.destroyRecord().then(() => {
          this.get('store').unloadRecord(speaker);
        });
      } catch (error) {
        applicationLogger.log(this.target.currentURL, error.message)
      }
    },
    actionSearch(e) {
      e.preventDefault();
      this.send("RouteActionSearch");
    }
  }
});
