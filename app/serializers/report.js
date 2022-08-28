import DS from "ember-data";
import ApplicationSerializer from "./application";
export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    reports: {
      serialize: 'id',
      deserialize: 'records'
    }
  },

  normalize(model, hash) {
    hash = this._super(...arguments);
    console.log(hash);
    return hash;
  },

  extractRelationship(relationshipModelName, relationshipHash) {
    return this._super(...arguments);
  }
});
