import DS from "ember-data";
import ApplicationSerializer from "./application";
export default ApplicationSerializer.extend({
  // attrs: {
  //   reports: {
  //     serialize: 'records',
  //     deserialize: 'records'
  //   }
  // },

  normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  },


  extractRelationship(relationshipModelName, relationshipHash) {
    return this._super(...arguments);
  }
});
