import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  session: service(),

  queryParams: ["search", "tags_like"],
  search: "",
  tags_like: "",
  dataService: service("data"),

  actions: {
    async deleteBook(book) {
      const applicationLogger = get(this, 'applicationLogger');
      try {
        await book.destroyRecord().then(() => {
          this.get('store').unloadRecord(book);
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
