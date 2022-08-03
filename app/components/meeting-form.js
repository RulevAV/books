import Component from '@ember/component';

export default Component.extend({
    store: Ember.inject.service(),
    Modaltitle: "",
    idModal: "Modal",
    reportForm: undefined,

    actions: {
        submitForm(e) {
            e.preventDefault();
            this.save({
                id: this.get("meeting.id"),
                dataMeeting: this.get("dataMeeting"),
                reports: this.get("reports")
            })
        },
        deleteReport(id) {
            const reports = this.get("reports").filter(report => report.id !== id);
            this.set("reports", reports);
        },
        addReport() {
            this.set("Modaltitle", "Добавить доклад");
            this.set("reportForm", null);
            this.$(`#${this.idModal}`).modal('show')
        },
        updataReport(report) {
            this.set("Modaltitle", "Редактировать доклад");
            this.set("reportForm", report);
            this.$(`#${this.idModal}`).modal('show')
        },
        saveReport(newReport) {
            let newReports = [];
            const reports = this.get("reports");
            if (!newReport.id) {
                newReports = [...reports, newReport];
            }

            if (newReport.id) {
                newReports = reports.map(report => {
                    if (report.id === newReport.id)
                        return newReport;
                    return report;
                })
            }
            this.set("reports", newReports);
            this.$(`#${this.idModal}`).modal('hide');
        }
    },

    async didReceiveAttrs() {
        this._super(...arguments);

        const reports = await Promise.all(this.get("meeting.reports").map(async (e) => {
            const databook = await e.book;
            const dataspeaker = await e.speaker;
            const book = {
                id: databook.id,
                name: databook.name,
                author: databook.author,
                sumPages: databook.sumPages,
                tags: databook.tags,
                averageRating: databook.averageRating,
                URLcover: databook.URLcover,
                URLDescription: databook.URLDescription,
            }
            const speaker = {
                id: dataspeaker.id,
                firstName: dataspeaker.firstName,
                lastName: dataspeaker.lastName,
                patronymic: dataspeaker.patronymic,
            }
            return {
                id: e.id,
                dataReport: e.dataReport,
                rating_book: e.rating_book,
                URLPresentation: e.URLPresentation,
                URLVideo: e.URLVideo,
                Review: e.Review,
                book,
                speaker
            }
        }))

        const listBook = await this.get('store').findAll("book");
        const listSpeaker = await this.get('store').findAll("speaker");
        this.setProperties({
            dataMeeting: this.get("meeting.dataMeeting"),
            reports,
            listBook,
            listSpeaker
        })
    }
});
