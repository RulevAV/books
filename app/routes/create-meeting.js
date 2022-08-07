import Route from '@ember/routing/route';
import EmberObject from "@ember/object";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
    async model() {
        const meeting = EmberObject.create({
            dateMeeting: "",
            reports: [],
        })
        return EmberObject.create({
            meeting : this.get("store").createRecord("meeting"),
            listBook: await this.get('store').findAll("book"),
            listSpeaker: await this.get('store').findAll("speaker"),
        })
    }
});
