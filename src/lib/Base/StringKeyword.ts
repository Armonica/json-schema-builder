import Keyword from './Keyword';

export default class StringKeyword extends Keyword {

  constructor(value: String) {
    super();
    this.value = value;
  }

  get value(): String {
    return this._getValue();
  }

  set value(value: String) {
    this._setValue(value);
  }
}
