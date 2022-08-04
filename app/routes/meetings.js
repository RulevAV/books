import Route from '@ember/routing/route';
// import EmberObject from "@ember/object";
import RSVP from 'rsvp';

import { PER_PAGE } from '../controllers/meetings';
export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    date: true,
    speaker: true,
    book: true
  },
  model({ page, date, speaker, book }) {
    const guery = {
      _page: page,
      _limit: PER_PAGE
    }

    if (date) {
      guery.date = date;
    }

    if (speaker) {
      guery.speaker = speaker;
    }

    if (book) {
      guery.book = book;
    }

    return RSVP.hash({
      speakers: this.get("store").findAll("speaker"),
      books: this.get("store").findAll("book"),
      meetings: this.get("store").query("meeting", guery)
    })
  },

  actions: {
    RouteActionSearch() {
      this.refresh();
    }
  }

});
