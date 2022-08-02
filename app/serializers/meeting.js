import AplicationSerializer from "./application";

export default AplicationSerializer.extend({

  normalize(model, hash) {
    hash = this._super(...arguments);

    console.log(hash);
    return hash;
  },
});
