/**
 * Created by Paul on 1/19/2016.
 */
import ObjectKeyword from './Keyword';
import Schema from '../Schema';

export default class BooleanOrSchemaKeyword extends ObjectKeyword {
  constructor(value: Boolean|Schema) {
    super();
    this.value = value;
  }

  get value(): Boolean|Schema {
    return this._getValue();
  }

  set value(value: Boolean|Schema) {
    this._setValue(value);
  }

  _jsonConstraints(context) {
    return (this.value instanceof Schema)
      ? (<Schema>this.value).json(null)
      : this.value;
  }
}
