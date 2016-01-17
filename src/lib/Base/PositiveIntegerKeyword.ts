/**
 * Created by Paul on 1/17/2016.
 */
import NumberKeyword from './NumberKeyword';

export default class PositiveIntegerKeyword extends NumberKeyword {
  constructor(value: Number) {
    super(value);
  }

  protected _setValue(value) {
    if (!(value >= 0 && Number.isInteger(value))) {
      throw new Error('value must be an integer and greater than or equal to 0');
    }
    this._value = value;
  }
}