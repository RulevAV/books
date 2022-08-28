import AplicationSerializer from "./application";
import DS from "ember-data";

export default AplicationSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    user: {
      serialize: 'id',
      deserialize: 'records'
    }
  },

  normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  },
});
