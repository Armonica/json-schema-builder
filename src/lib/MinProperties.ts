import ObjectKeyword from './ObjectKeyword';

export default class MinProperties extends ObjectKeyword {

  _value: any;

  constructor(...value: any[]) {
    super();
    value = value.length === 1 ? value[0] : value;
    this.value = value || 0;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (Number.isInteger(value) && value >= 0) {
      this._value = value;
    } else {
      throw new Error('value must be an integer greater than or equal to 0')
    }
  }

  json(context) {
    context = context || {};
    context.minProperties = this.value;
    return context;
  }
}
