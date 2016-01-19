import Keyword from '../Base/Keyword';
import Schema from '../Schema';

export default class Not extends Keyword {
  _key = "not";
  constructor(value: Schema) {
    super();
    this.value = value;
  }

  get value(): Schema {
    return this._value;
  }

  set value(value: Schema) {
    this._value = value;
  }

  _jsonConstraints(context) {
    return this.value.json({});
  }
}
