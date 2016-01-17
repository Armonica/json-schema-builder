/**
 * Created by Paul on 1/17/2016.
 */

import Keyword from './Keyword';

export default class NumberKeyword extends Keyword {

  constructor(value: Number) {
    super();
    this.value = value;
  }

  get value(): Number {
    return this._getValue();
  }

  set value(value: Number) {
    this._setValue(value);
  }
}
