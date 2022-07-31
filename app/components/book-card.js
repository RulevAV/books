import Component from '@ember/component';

export default Component.extend({

  progressbarStyle: Ember.computed('progressbarStyle', function () {
    return Ember.String.htmlSafe(`width: ${this.get("book.average_rating")}%;`);
  })
});
