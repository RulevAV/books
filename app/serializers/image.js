import AplicationSerializer from "./application";
import DS from "ember-data";

export default AplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
    normalize(model, hash) {
        hash = this._super(...arguments);
        hash.data.id = hash.data.id.guid;
        return hash;
    },
});