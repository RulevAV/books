import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
    store: Ember.inject.service(),
    moment: service(),

    actions: {
        async updateMeeting() {
            const applicationLogger = get(this, 'applicationLogger');

            const newMeeting = this.get('model.meeting');
            const date = this.get('moment').moment(newMeeting.dateMeeting, 'YYYY-MM-DD').toDate();

           // try {
                const meeting = this.get("store").createRecord("meeting", {
                    dateMeeting: date,
                    reports: []
                });
                await meeting.save();

                const reports = newMeeting.reports.map(r => {
                    return new Promise(async (resolve, reject) => {
                        console.log(r);
                        const report = await this.get("store").createRecord("report", r);
                        await meeting.reports.pushObject(report);
                        await report.save();
                        resolve()
                    })
                })

                await Promise.all(reports);
                await meeting.save();
                await this.get('store').unloadAll();

            // } catch (error) {
            //     applicationLogger.log(this.target.currentURL, error.message)
            // }

           //this.transitionToRoute("meetings");
        },
        async saveReport(newReport) {
            const meeting = this.get('model.meeting');

            if (!newReport.tempId) {
                const report = this.get("store").createRecord("report", newReport);
                report.set('dataReport', new Date(meeting.dateMeeting));
                report.set('tempId', Date.now());
                meeting.reports.pushObject(report);
            } else {
                const report = meeting.reports.find(e => e.tempId === newReport.tempId);
                report.set('Review', newReport.Review);
                report.set('URLPresentation', newReport.URLPresentation);
                report.set('URLVideo', newReport.URLVideo);
                report.set('rating_book', newReport.rating_book);
                report.set('book', newReport.book);
                report.set('speaker', newReport.speaker);
            }
        },
    }
});