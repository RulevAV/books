import Controller from '@ember/controller';

export default Controller.extend({
    store: Ember.inject.service(),

    actions: {
        async updateMeeting() {
            const meeting = this.get('model.meeting');
            const reports = meeting.reports.map(report => {
                return new Promise(async (resolve, reject) => {
                    report.set('dataReport', meeting.dateMeeting);
                    await report.save();
                    resolve()
                })
            })
            await Promise.all(reports);
            meeting.save();
            this.transitionToRoute("meetings");
        },
        async saveReport(newReport) {
            const meeting = this.get('model.meeting');

            if (!newReport.id && !newReport.tempId) {
                const report = this.get("store").createRecord("report", newReport);
                report.set('dataReport', new Date(meeting.dateMeeting));
                report.set('tempId', Date.now());
                meeting.reports.pushObject(report);
            } else {
                let report;
                if (newReport.id) {
                    report = await this.get("store").peekRecord("report", newReport.id)
                }
    
                if (newReport.tempId) {
                    report = meeting.reports.find(e=>e.tempId===newReport.tempId);
                }
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