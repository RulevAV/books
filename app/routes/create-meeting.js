import Route from '@ember/routing/route';
import EmberObject from "@ember/object";

export default Route.extend({
    async model() {
        const report =await this.get("store").findRecord("report",1);
        const meetingModel =await this.get("store").findRecord("meeting",1);
        meetingModel.reports.pushObject(report);
        //await meetingModel.save();
        // TODO: не получится связать meeting и reports
        return EmberObject.create({
            dateMeeting: "",
            reports: [],
        })
    }
});
