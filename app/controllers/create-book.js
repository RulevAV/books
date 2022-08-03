import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'books/config/environment';

export default Controller.extend({
  dataService: service("data"),
  actions: {
    async createBook(book, uploadData) {
      const newBook = this.get("store").createRecord("book",book)
      await newBook.save();
      if (uploadData) {
        uploadData.url = ENV.fileUploadURL;
        let req =await uploadData.submit();
        newBook.set("URLcover", `/uploads/${req.filename}`);
        await newBook.save();
      }

      this.transitionToRoute("books");
    },
  },
});
