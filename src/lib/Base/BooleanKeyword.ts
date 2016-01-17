/**
 * Created by Paul on 1/17/2016.
 */

import Keyword from './Keyword';

export default class BooleanKeyword extends Keyword {

  constructor(value: Boolean) {
    if(!(value === true || value === false)) {
      value = false;
    }
    super();
    this.value = value;
  }

  get value(): Boolean {
    return this._getValue();
  }

  set value(value: Boolean) {
    this._setValue(value);
  }
}