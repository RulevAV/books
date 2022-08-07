import Route from '@ember/routing/route';
import EmberObject from "@ember/object";
export default Route.extend({
    async model({ id }) {
        return EmberObject.create({
            meeting: await this.get("store").findRecord("meeting", id),
            listBook: await this.get('store').findAll("book"),
            listSpeaker: await this.get('store').findAll("speaker"),
        })
    }
})