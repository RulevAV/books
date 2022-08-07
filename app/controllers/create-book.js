import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'books/config/environment';
import { get } from '@ember/object';

export default Controller.extend({
  dataService: service("data"),
  actions: {
    async createBook(book, uploadData) {
      const applicationLogger = get(this, 'applicationLogger');
      const newBook = this.get("store").createRecord("book", book)

      try {
        await newBook.save();
        if (uploadData) {
          uploadData.url = ENV.fileUploadURL;
          let req = await uploadData.submit();
          newBook.set("URLcover", `/uploads/${req.filename}`);
          await newBook.save();
        }
      } catch (error) {
        applicationLogger.log(this.target.currentURL, error.message)
      }

      this.transitionToRoute("books");
    },
  },
});
