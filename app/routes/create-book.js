import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      name: "",
      author: "",
      sumPages: 0,
      tags: [],
      average_rating: 0,
      URLcover: "",
      URLDescription: "",
    }
  }
});
