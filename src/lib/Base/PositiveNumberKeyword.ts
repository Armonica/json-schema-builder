/**
 * Created by Paul on 1/17/2016.
 */

import NumberKeyword from './NumberKeyword';

export default class PositiveNumberKeyword extends NumberKeyword {
  constructor(value: Number) {
    super(value);
  }

  protected _setValue(value) {
    if (value <= 0) {
      throw new Error('value must be a number greater than 0');
    }
    this._value = value;
  }
}
