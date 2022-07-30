import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    this.$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();

    const add = (tag) => {
      let tags = this.get("tags");
      this.set("tags", [...tags, tag]);
    }

    const remove = (tag) => {
      let tags = this.get("tags");
      this.set("tags", tags.filter((e) => {
        return e !== tag;
      }));
    }

    this.$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").on('beforeItemAdd', function (event) {
      const tag = event.item;
      add(tag);
    });

    this.$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").on('beforeItemRemove', function (event) {
      const tag = event.item;
      remove(tag);
    });
  },

  willDestroyElement() {
    this.$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").off('beforeItemAdd');
    this.$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").off('beforeItemRemove');
  }
});
