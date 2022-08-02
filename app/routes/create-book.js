import Route from '@ember/routing/route';
import EmberObject from "@ember/object";
export default Route.extend({
  model() {
    return EmberObject.create({
      name: "",
      author: "",
      sumPages: 0,
      tags: [],
      average_rating: 0,
      URLcover: "",
      URLDescription: "",
    })
  }
});
