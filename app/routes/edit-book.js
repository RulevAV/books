import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import EmberObject from "@ember/object";
export default Route.extend({
  dataService: service("data"),

  model({ id }) {
    return this.get("dataService").getBook(id);
  },



  // async setupController(controller, model) {
  //   //super.setupController(...arguments);

  //   // const book = await this.get("dataService").getBook(model);


  //   // this.set("book", EmberObject.create());
  //   // this.get("book").set("name", book.name);
  //   // this.get("book").set("author", book.author);
  //   // this.get("book").set("sumPages", book.sumPages);
  //   // this.get("book").set("tags", book.tags);
  //   // this.get("book").set("average_rating", book.average_rating);
  //   // this.get("book").set("URLcover", book.URLcover);
  //   // this.get("book").set("URLDescription", book.URLDescription);

  //   // controller.setdata(book);
  // }
});
