import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';

export default EmberObject.extend({
  dataService: service("logger-error"),

  log(url, message) {
    // eslint-disable-next-line no-console
  //  this.get("dataService").writeError({ url, message })
  }
});
