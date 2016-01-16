import Keyword from './Keyword';

export default class RefKeyword extends Keyword {

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
    if (typeof value != 'string') {
      // TODO better validation
      throw new Error('value must be a valid uri string');
    }

    this._value = value;
  }

  json(context) {
    context = context || {};
    context.$ref = this.value;
    return context;
  }
}
