import Controller from '@ember/controller';

export default Controller.extend({
    store: Ember.inject.service(),
    actions: {
        async updateMeeting(meeting) {
            const temp = await this.get("store").findRecord("meeting", 1);
            // let meetingModel = this.get("model");
            // TODO: не получится связать meeting и reports
            temp.set("dateMeeting", "qwer");
            await temp.save();
        }
    }
});
