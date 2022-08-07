import Route from '@ember/routing/route';
import EmberObject from "@ember/object";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
  model() {
    return EmberObject.create({
      name: "",
      author: "",
      sumPages: 0,
      tags: [],
      averageRating: 0,
      URLcover: "",
      URLDescription: "",
    })
  }
});
