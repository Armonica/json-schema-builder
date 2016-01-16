import NumberKeyword from './NumberKeyword';

export default class MultipleOf extends NumberKeyword {

  _value: any;

  constructor(value) {
    super();
    //value = value.length === 1 ? value[0] : value;
    this.value = value;
  }

  set value(value) {
    if (typeof value != 'number' || value <= 0) {
      throw new Error('value must be a number greater than 0');
    }

    this._value = value;
  }

  get value() {
    return this._value;
  }

  json(context) {
    context = context || {};

    context.multipleOf = this.value;
    return context;
  }
}