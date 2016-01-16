import Keyword from './Keyword';
import Schema from './Schema';

export default class Not extends Keyword {
  _value: any;
  constructor(...value: any[]) {
    super();
    value = value.length === 1 ? value[0] : value;
    this.value = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (typeof value != 'object' || !(value instanceof Schema)) {
      throw new Error('value must be an object and must be a valid JSON schema');
    }

    this._value = value;
  }

  json(context) {
    context = context || {};

    const value = (this.value instanceof Schema)
        ? this.value.json({})
        : this.value;

    context.not = value;
    return context;
  }
}