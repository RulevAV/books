import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ["search", "tags_like"],
  search: "",
  tags_like: "",
  dataService: service("data"),

  actions: {
    async deleteBook(book) {
      await book.destroyRecord();
    },
    actionSearch(e) {
      e.preventDefault();
      this.send("RouteActionSearch");
    }
  }
});
