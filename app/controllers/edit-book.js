import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service("data"),
  init() {
    this._super(...arguments);

  },

  actions: {
    async updateBook(book, uploadData) {
      //await this.get("dataService").updateBook(book, uploadData);

      let bookModel = this.get("model");
      bookModel.set("name", book.name);
      bookModel.set("author", book.author);
      bookModel.set("sumPages", book.sumPages);
      bookModel.set("tags", book.tags);
      bookModel.set("average_rating", book.average_rating);
      bookModel.set("URLcover", book.URLcover);
      bookModel.set("URLDescription", book.URLDescription);
      await bookModel.save();

      this.transitionToRoute("books");
    }
  },

});
