import AplicationSerializer from "./application";

export default AplicationSerializer.extend({

  normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  },
});
