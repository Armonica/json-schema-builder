import StringKeyword from './StringKeyword';

export default class Pattern extends StringKeyword {

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
    if (typeof value === 'string') {
      this._value = value;
    } else {
      throw new Error('value must be a string and should be a valid regular expression');
    }
  }

  json(context) {
    context = context || {};

    context.pattern = this.value;
    return context;
  }
}