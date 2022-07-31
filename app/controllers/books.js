import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ["search", "tags_like"],
  search: "",
  tags_like: "",
  dataService: service("data"),

  async updateBooks() {
    const books = await this.get("dataService").getBooks(this.get("search"), this.get("tags_like"));
    this.set("books", books);
  },

  actions: {
    async deleteBook(book) {
      await this.get("dataService").deleteBook(book);
      const books = this.get("books").filter((e) => {
        return e.id !== book.id
      });
      this.set("books", books)
    },
    actionSearch(e) {
      e.preventDefault();
      this.updateBooks();
    }
  }
});
