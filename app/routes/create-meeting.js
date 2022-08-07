import Route from '@ember/routing/route';
import EmberObject from "@ember/object";

export default Route.extend({
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
