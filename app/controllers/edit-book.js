import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service("data"),
  init() {
    this._super(...arguments);
    // this.setProperties({
    //   name: undefined,
    //   author: undefined,
    //   sumPages: undefined,
    //   tags: [],
    //   average_rating: undefined,
    //   URLcover: undefined,
    //   URLDescription: undefined,
    // });

    // this.set("book", EmberObject.create());
    // this.get("book").set("name", "");
    // this.get("book").set("author", "");
    // this.get("book").set("sumPages", 0);
    // this.get("book").set("tags", []);
    // this.get("book").set("average_rating", 0);
    // this.get("book").set("URLcover", "");
    // this.get("book").set("URLDescription", "");
  },

  actions: {
    async updateBook(book) {
      await this.get("dataService").updateBook(book);
      this.transitionToRoute("books");
    }
  },

  //setProperties

  // didReceiveAttrs() {
  //   this._super(...arguments);
  //   this.setProperties({

  //   });
  // },


});
