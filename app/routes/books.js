import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: true,
    tags_like: true,
  },

  model({ search, tags_like }) {
    return this.get("store").query("book", { q: search, tags_like });
  },

  actions: {
    RouteActionSearch() {
      this.refresh();
    }
  }
});
