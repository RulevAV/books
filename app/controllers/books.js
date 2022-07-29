import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service("data"),
  actions: {
    async deleteBook(book) {
      await this.get("dataService").deleteBook(book);
      const books = this.get("model").filter((e) => {
        return e.id !== book.id
      });
      this.set("model", books)
    }
  }
});
