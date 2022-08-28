import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'books/config/environment';
import { get } from '@ember/object';

export default Controller.extend({
  dataService: service("data"),
  init() {
    this._super(...arguments);
  },

  readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    })
  },
  
  actions: {
    async updateBook(book, uploadData) {
      const applicationLogger = get(this, 'applicationLogger');

      try {
        let bookModel = this.get("model");
        bookModel.set("name", book.name);
        bookModel.set("author", book.author);
        bookModel.set("sumPages", book.sumPages);
        bookModel.set("tags", book.tags);
        bookModel.set("average_rating", book.average_rating);
        bookModel.set("urlCover", book.urlCover);
        bookModel.set("urlDescription", book.urlDescription);

        if (uploadData) {
          const base64text = await this.readFileAsync(uploadData.files[0]);
          const mass = base64text.split(',');
          const newImage = this.get("store").createRecord("image", {
            type: mass[0],
            img: mass[1],
          });
          await newImage.save();
          bookModel.set("urlCover", `${ENV.backendUrl}/images/${newImage.id}`);
        }
        await bookModel.save();
      } catch (error) {
        applicationLogger.log(this.target.currentURL, error.message)
      }

      this.transitionToRoute("books");
    }
  }
});