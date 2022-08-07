import Component from '@ember/component';

export default Component.extend({
    store: Ember.inject.service(),
    modalTitle: '',
    idModal: 'Modal',
    reportForm: {},

    actions: {
        submitForm(e) {
            e.preventDefault();
            this.save();
        },

        async deleteReport(report) {
            await report.destroyRecord().then(() => {
                this.get('store').unloadRecord(report);
            });
        },

        addReport() {
            this.set('modalTitle', 'Добавить доклад');
            this.set('reportForm', {
                rating_book: '',
                URLPresentation: '',
                URLVideo: '',
                Review: '',
                book: this.get('listBook').firstObject,
                speaker: this.get('listSpeaker').firstObject,
            });
            this.$(`#${this.idModal}`).modal('show')
        },

        updataReport(report) {
            this.set('modalTitle', 'Редактировать доклад');
            this.set('reportForm', {
                id:report.id,
                rating_book: report.rating_book,
                URLPresentation:report.URLPresentation,
                URLVideo:report.URLVideo,
                Review: report.Review,
                book: report.book,
                speaker:report.speaker,
                tempId:report.tempId,
            });
            this.$(`#${this.idModal}`).modal('show')
        },

        saveReport() {
            const reportForm = this.get('reportForm');
            this.$(`#${this.idModal}`).modal('hide')
            this.saveReport(reportForm);
        }
    },
    async didReceiveAttrs() {
        this._super(...arguments);
    }
});
