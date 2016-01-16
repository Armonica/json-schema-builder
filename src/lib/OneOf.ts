import Keyword from './Keyword';
import Schema from './Schema';

export default class OneOf extends Keyword {
  _value: any;
  constructor(...value: any[]) {
    super();
    this.value = Array.isArray(value) && value.length === 1 ? value[0] : value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (!Array.isArray(value) || !value.length) {
      throw new Error('value must be an array of values with at least one element');
    }

    value.forEach(elem => {
      if (typeof elem != 'object' || !(elem instanceof Schema)) {
        throw new Error('array values must be valid Schema instances');
      }
    });

    this._value = value;
  }

  json(context) {
    context = context || {};

    if (this.value) {
      const props = [];

      this.value.forEach(elem => {
        props.push(elem instanceof Schema ? elem.json() : elem);
      });

      context.oneOf = props;
    }

    return context;
  }

}
