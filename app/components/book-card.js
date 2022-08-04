import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service(),

  progressbarStyle: computed('progressbarStyle', function () {
    return htmlSafe(`width: ${this.get("book.averageRating")}%;`);
  })
});
