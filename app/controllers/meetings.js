import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export const PER_PAGE = 2;

export default Controller.extend({
  session: service(),
  queryParams: ['page', 'date', 'speaker', 'book'],
  page: 1,
  date: "",
  speaker: "",
  book: "",

  pages: computed('model.meetings.meta.total', function () {
    const total = this.get('model.meetings.meta.total');
    if (Number.isNaN(total) || total <= 0) {
      return [];
    }
    return new Array(Math.ceil(total / PER_PAGE)).fill().map((value, index) => index + 1)
  }),

  actions: {
    async delete(meeteing) {
      const applicationLogger = get(this, 'applicationLogger');
      try {
        await meeteing.reports.map(r => {
          r.destroyRecord().then(() => {
            this.get('store').unloadRecord(r);
          })
        })
        await meeteing.destroyRecord().then(() => {
          this.get('store').unloadRecord(meeteing);
        });
      } catch (error) {
        applicationLogger.log(this.target.currentURL, error.message)
      }
    },

    changeSpeaker(e) {
      this.set("speaker", e.target.value)
    },
    changeBook(e) {
      this.set("book", e.target.value)
    },
    actionSearch(e) {
      e.preventDefault();
      this.send("RouteActionSearch");
    },
    clearSearch(e) {
      e.preventDefault();
      this.set("date", "");
      this.set("speaker", "");
      this.set("book", "");
      this.send("RouteActionSearch");
    },
    back(e) {
      e.preventDefault();
      this.set('page', this.get('page') - 1)
      this.send("RouteActionSearch");
    },
    next(e) {
      e.preventDefault();
      this.set('page', this.get('page') + 1)
      this.send("RouteActionSearch");
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
  }
});
