import Component from '@ember/component';

export default Component.extend({
    actions: {
        async changeBook(e) {
            const book = await this.get('listBook').find(listBook => listBook.id === e.target.value)
            this.set('report.book', book);
        },
        async changeSpeaker(e) {
            const speaker = await this.get('listSpeaker').find(speaker => speaker.id === e.target.value)
            this.set('report.speaker', speaker);
        }
    }
});
