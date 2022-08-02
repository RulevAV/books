import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service("data"),
  actions: {
    async createBook(book, uploadData) {
      const newSpeaker = this.get("store").createRecord("book", book);
      await newSpeaker.save();

      if (uploadData) {
        console.log(1);
        uploadData.url = `${ENV.fileUploadURL}`;
        const res = await uploadData.submit();
        newSpeaker.fileName = res.filename;
        await newSpeaker.save();
      }
      this.transitionToRoute("books");
    },
  },
});
