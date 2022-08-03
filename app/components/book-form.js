import Component from '@ember/component';
import { set } from "@ember/object";

export default Component.extend({
  actions: {
    submitForm(e) {
      e.preventDefault();
      this.save({
        id: this.get("book.id"),
        name: this.get("name"),
        author: this.get("author"),
        sumPages: this.get("sumPages"),
        tags: this.get("tags"),
        averageRating: this.get("averageRating"),
        URLcover: this.get("URLcover"),
        URLDescription: this.get("URLDescription"),
      }, this.get("uploadData"))
    },
    uploadDataChanged(uploadData) {
      set(this, "uploadData", uploadData)
    },
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      name: this.get("book.name"),
      author: this.get("book.author"),
      sumPages: this.get("book.sumPages"),
      tags: this.get("book.tags"),
      averageRating: this.get("book.averageRating"),
      URLcover: this.get("book.URLcover"),
      URLDescription: this.get("book.URLDescription"),
    });
  }
});
