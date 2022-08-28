import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'books/config/environment';
import { get } from '@ember/object';

export default Controller.extend({
  dataService: service("data"),

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
    async createBook(book, uploadData) {
      const applicationLogger = get(this, 'applicationLogger');
      const newBook = this.get("store").createRecord("book", book);

      try {
        if (uploadData) {
          const base64text = await this.readFileAsync(uploadData.files[0]);
          const mass = base64text.split(',');
          const newImage = this.get("store").createRecord("image", {
            type: mass[0],
            img: mass[1],
          });

          await newImage.save();
          newBook.set("urlCover", `${ENV.backendUrl}/images/${newImage.id}`);
        }
        await newBook.save();
      } catch (error) {
        applicationLogger.log(this.target.currentURL, error.message)
      }

      this.transitionToRoute("books");
    },
  },
});
