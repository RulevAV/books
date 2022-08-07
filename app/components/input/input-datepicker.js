import Component from '@ember/component';

export default Component.extend({
    didInsertElement() {
        this._super(...arguments);
        this.$(".datepicker").datepicker({
            clearBtn: true,
            format: "yyyy-mm-dd",
            language: "ru",
            autoclose: true,
          });
      },
});
