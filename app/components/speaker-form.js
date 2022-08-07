import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(e) {
      e.preventDefault();
      this.save({
        id: this.get("speaker.id"),
        firstName: this.get("firstName"),
        lastName: this.get("lastName"),
        patronymic: this.get("patronymic"),
      })
    },
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      firstName: this.get("speaker.firstName"),
      lastName: this.get("speaker.lastName"),
      patronymic: this.get("speaker.patronymic"),
    });
  }
});
