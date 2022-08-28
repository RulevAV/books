import Component from '@ember/component';

export default Component.extend({
    didReceiveAttrs() {
        this._super(...arguments);
       // console.log(this.report.book.get('name'));
       console.log(this.report);
      }
});
