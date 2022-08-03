import Component from '@ember/component';

export default Component.extend({
    async didReceiveAttrs() {
        this._super(...arguments);
        const report = this.get('report');
        this.setProperties({
            dataReport: report ? report.dataReport : '',
            rating_book: report ? report.rating_book : '',
            URLPresentation: report ? report.URLPresentation : '',
            URLVideo: report ? report.URLVideo : '',
            Review: report ? report.Review : '',
            book: report ? report.book : null,
            speaker: report ? report.speaker : null,
        });
    },

    actions: {
        save() {
            this.saveReport({
                id:this.get('report.id'),
                dataReport: this.dataReport,
                rating_book: this.rating_book,
                URLPresentation: this.URLPresentation,
                URLVideo: this.URLVideo,
                Review: this.Review,
                book: this.book,
                speaker: this.speaker,
            })

            this.setProperties({
                id:undefined,
                dataReport: '',
                rating_book: '',
                URLPresentation: '',
                URLVideo: '',
                Review: '',
                book: null,
                speaker: null,
            });
        },
        async changeBook(e) {
            const book = await this.get("listBook").find(listBook => listBook.id === e.target.value)
            this.set("book", book);
        },
        async changeSpeaker(e) {
            const speaker = await this.get("listSpeaker").find(speaker => speaker.id === e.target.value)
            this.set("speaker", speaker);
        }
    }
});
