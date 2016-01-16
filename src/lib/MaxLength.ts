import StringKeyword from './StringKeyword';

export default class MaxLength extends StringKeyword {

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
    if (value >= 0 && Number.isInteger(value)) {
      this._value = value;
    } else {
      throw new Error('value must be an integer and greater than or equal to 0');
    }
  }

  json(context) {
    context = context || {};

    context.maxLength = this.value;
    return context;
  }
}