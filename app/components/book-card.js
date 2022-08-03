import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
export default Component.extend({
  progressbarStyle: computed('progressbarStyle', function () {
    return htmlSafe(`width: ${this.get("book.averageRating")}%;`);
  })
});
