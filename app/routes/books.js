import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

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
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller._refreshData();
  }
});
