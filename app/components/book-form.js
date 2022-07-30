import Component from '@ember/component';

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
        average_rating: this.get("average_rating"),
        URLcover: this.get("URLcover"),
        URLDescription: this.get("URLDescription"),
      })
    },

  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      name: this.get("book.name"),
      author: this.get("book.author"),
      sumPages: this.get("book.sumPages"),
      tags: this.get("book.tags"),
      average_rating: this.get("book.average_rating"),
      URLcover: this.get("book.URLcover"),
      URLDescription: this.get("book.URLDescription"),
    });
  }
});
