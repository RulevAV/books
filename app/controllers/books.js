import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import { debounce, cancel, schedule } from '@ember/runloop';

export default Controller.extend({
  session: service(),

  queryParams: ["search", "tags_like"],
  search: "",
  tags_like: "",
  dataService: service("data"),

  actions: {
    async deleteBook(book) {
      const applicationLogger = get(this, 'applicationLogger');
      try {
        await book.destroyRecord().then(() => {
          this.get('store').unloadRecord(book);
        });
      } catch (error) {
        applicationLogger.log(this.target.currentURL, error.message)
      }
    },

    inputHandler(event) {
      set(this, 'search', event.target.value);
      let debounceId = get(this, 'debounceId');
      cancel(debounceId);
      this._refreshData();
    },

    actionSearch(e) {
      e.preventDefault();
      this.send("RouteActionSearch");
    }
  },

  _refreshData() {
    let debounceId = debounce(() => {
      const search = get(this, 'search');
      const tags_like = get(this, 'tags_like');
      this.get("store").query("book", { q: search, tags_like }).then((data) => {
        set(this, 'model', data)
        schedule('afterRender', () => {
          this._refreshData();
        });
      })
    }, 2000);

    set(this, 'debounceId', debounceId);
  },

});
