import NumberKeyword from './NumberKeyword';

export default class Minimum extends NumberKeyword {

  _value: any;

  constructor(...value: any[]) {
    super();
    value = value.length === 1 ? value[0] : value;
    this.value = value;
  }

  set value(value) {
    if (typeof value != 'number') {
      throw new Error('value must be a number');
    }

    this._value = value;
  }

  get value() {
    return this._value;
  }

  json(context) {
    context = context || {};

    context.minimum = this.value;
    return context;
  }
}