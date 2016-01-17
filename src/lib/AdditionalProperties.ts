import Schema from './Schema';
import ObjectKeyword from './ObjectKeyword';

export default class AdditionalProperties extends ObjectKeyword {
  _key = "additionalProperties";

  constructor(...value: any[]) {
    super();
    value = value.length === 1 ? value[0] : value;
    this.value = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (typeof value == 'boolean' || typeof value == 'object' || value instanceof Schema) {
      this._value = value;
    } else {
      throw new Error('value must be a boolean value or a Schema instance');
    }
  }

  _jsonConstraints(context) {
    return (this.value instanceof Schema)
      ? this.value.json({})
      : this.value;
  }
}

