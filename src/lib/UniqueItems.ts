import ArrayKeyword from './ArrayKeyword';

export default class UniqueItems extends ArrayKeyword {

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
    if (typeof value == 'boolean') {
      this._value = value;
    } else {
      throw new Error('value must be a boolean value');
    }
  }

  json(context) {
    context = context || {};

    context.uniqueItems = this.value;
    return context;
  }
}