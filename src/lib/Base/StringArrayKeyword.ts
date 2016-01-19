/**
 * Created by Paul on 1/19/2016.
 */
import Keyword from './Keyword';

//TODO: check uniqueness of string values in the array
export default class StringArrayKeyword extends Keyword {
  constructor(value: Array<String>) {
    super();
    this.value = value;
  }

  get value(): Array<String> {
    return this._value;
  }

  set value(value: Array<String>) {
    if (value.length) {
      this._value = value;
    } else {
      throw new Error('value must be an array of property names with at least one element: ' + JSON.stringify(value));
    }
  }
}
