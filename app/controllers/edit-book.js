import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'books/config/environment';

export default Controller.extend({
  dataService: service("data"),
  init() {
    this._super(...arguments);
  },

  actions: {
    async updateBook(book, uploadData) {
      let bookModel = this.get("model");
      bookModel.set("name", book.name);
      bookModel.set("author", book.author);
      bookModel.set("sumPages", book.sumPages);
      bookModel.set("tags", book.tags);
      bookModel.set("average_rating", book.average_rating);
      bookModel.set("URLcover", book.URLcover);
      bookModel.set("URLDescription", book.URLDescription);
      await bookModel.save();

      if (uploadData) {
        uploadData.url = ENV.fileUploadURL;
        let req =await uploadData.submit();
        bookModel.set("URLcover", `/uploads/${req.filename}`);
        await bookModel.save();
      }
      this.transitionToRoute("books");
    }
  }
});