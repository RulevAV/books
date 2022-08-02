import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: true,
  },

  model({ search }) {
    return this.get("store").query("speaker", { q: search });
  },

  actions: {
    RouteActionSearch() {
      this.refresh();
    }
  }
});
