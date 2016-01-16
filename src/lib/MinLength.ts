import StringKeyword from './StringKeyword';

export default class MinLength extends StringKeyword {

  _value: any;

  constructor(...value: any[]) {
    super();
    this.value = value.length === 1 ? value[0] : value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (value >= 0 && Number.isInteger(value)) {
      this._value = value;
    } else {
      throw new Error('value must be an integer and greater than or equal to 0');
    }
  }

  json(context) {
    context = context || {};

    context.minLength = this.value;
    return context;
  }
}