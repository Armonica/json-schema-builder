import Keyword from './Keyword';
import Schema from './Schema';

export default class Definitions extends Keyword {

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
    if (typeof value == 'object' && !Array.isArray(value)) {
      for (let prop in value) {
        if (!(prop instanceof Schema)) {
          throw new Error('value properties must be valid Schema instances');
        }
      }
      this._value = value;
    } else {
      throw new Error('value must be an object');
    }
  }

  json(context) {
    context = context || {};

    context.definitions = this.value;
    return context;
  }
}