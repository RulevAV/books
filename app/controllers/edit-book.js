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


      // let bookModel = this.get("model");
      // bookModel.set("name", book.name);
      // bookModel.set("author", book.author);
      // bookModel.set("sumPages", book.sumPages);
      // bookModel.set("tags", book.tags);
      // bookModel.set("average_rating", book.average_rating);
      // bookModel.set("URLcover", book.URLcover);
      // bookModel.set("URLDescription", book.URLDescription);
      // await bookModel.save();


      const qwe = await this.get("dataService").updateBook(book, uploadData);
      console.log(qwe);

      //console.log(bookModel.id);
      //this.get("dataService").addURLcover(uploadData, bookModel.id);
      //console.log(asd);

      // if (uploadData) {
      //   uploadData.url = `${ENV.fileUploadURL}`;

      //   uploadData.submit().done((result/*, textStatus, jqXhr*/) => {
      //     console.log(123);

      //   }).fail((jqXhr, textStatus, errorThrown) => {
      //     reject(errorThrown);
      //   });

      // const res = uploadData.submit();
      // console.log(res);
      // bookModel.set("URLcover", res.filename);
      // await bookModel.save();

    }

    //this.transitionToRoute("books");
  }

});

