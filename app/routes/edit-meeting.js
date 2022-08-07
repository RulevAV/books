import Route from '@ember/routing/route';
import EmberObject from "@ember/object";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
    async model({ id }) {
        return EmberObject.create({
            meeting: await this.get("store").findRecord("meeting", id),
            listBook: await this.get('store').findAll("book"),
            listSpeaker: await this.get('store').findAll("speaker"),
        })
    }
})