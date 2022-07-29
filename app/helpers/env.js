import { helper } from '@ember/component/helper';
import ENV from 'books/config/environment';
import { get } from "@ember/object";

export function env([propertyName]/*, hash*/) {
  return get(ENV, propertyName);
}

export default helper(env);
