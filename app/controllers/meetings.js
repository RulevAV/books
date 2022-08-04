import Controller from '@ember/controller';
import { computed } from '@ember/object';

export const PER_PAGE = 2;

export default Controller.extend({
  queryParams: ['page', 'date', 'speaker', 'book'],
  page: 1,
  date: "",
  speaker: "",
  book: "",
  //pages: [1, 2, 3, 4],

  pages: computed('model.meetings.meta.total', function () {
    console.log(this.get("model"));
    const total = 6;
    if (Number.isNaN(total) || total <= 0) {
      return [];
    }
    const temp = new Array(Math.ceil(total / PER_PAGE)).fill().map((value, index) => index + 1);
    console.log(temp);
    return new Array(Math.ceil(total / PER_PAGE)).fill().map((value, index) => index + 1)
  }),

  // selectedSpeaker: computed('speaker', function () {
  //   const speaker = this.get('speaker');

  //   return speaker ? this.get('model.speakers').findBy('id', speaker) : null
  // }),

  // selectedBook: computed('speaker', function () {
  //   const speaker = this.get('speaker');

  //   return speaker ? this.get('model.speakers').findBy('id', speaker) : null
  // }),

  actions: {
    async delete(meeteing) {
      await meeteing.destroyRecord();
    },
    // changeSpeaker(speaker) {
    //   this.set("changeSpeaker", speaker ? speaker.get('id') : "")
    // }
    changeSpeaker(e) {
      this.set("speaker", e.target.value)
    },
    changeBook(e) {
      this.set("book", e.target.value)
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    console.log(123);
  }
});
