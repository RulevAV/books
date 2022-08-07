import Route from '@ember/routing/route';
import EmberObject from "@ember/object";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
  model() {
    return EmberObject.create({
      firstName: "",
      lastName: "",
      patronymic: ""
    })
  }
});
