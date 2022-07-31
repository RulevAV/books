import Component from '@ember/component';
import { computed } from '@ember/object';
import { set } from "@ember/object";

export default Component.extend({
  isFileChoosen: computed('uploadData', function () {
    return this.get("uploadData") && this.get("uploadData").files.length;
  }),

  ifRemoveButtonDisabled: computed('isFileChoosen', function () {
    return !this.get("isFileChoosen");
  }),

  fileName: computed('isFileChoosen', function () {
    return this.get("isFileChoosen") ? this.get("uploadData").files[0].name : "Выберите файл";
  }),

  didInsertElement() {
    this._super(...arguments);

    const onFileAdd = (e, uploadData) => {
      this.uploadDataChanged(uploadData);
    };

    this.$(".custom-file-input").fileupload({
      autoUpload: false,
      dataType: 'json',
      maxNumberOfFiles: 1,
      singleFileUploads: true,
      dropZone: null,
      add: onFileAdd
    });
  },


  willDestroyElement() {
    this._super(...arguments);
    this.$(".custom-file-input").fileupload("destroy");
  },

  actions: {
    removeFile() {
      set(this, "uploadData", null)
    }
  }
});
