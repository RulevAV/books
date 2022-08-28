import Component from '@ember/component';
import { set } from "@ember/object";
import { inject as service } from '@ember/service';

export default Component.extend({
  currentUser: service(),

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
        urlCover: this.get("urlCover"),
        urlDescription: this.get("urlDescription"),
        user:this.get("currentUser.user")
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
      urlCover: this.get("book.urlCover"),
      urlDescription: this.get("book.urlDescription"),
    });
  }
});
