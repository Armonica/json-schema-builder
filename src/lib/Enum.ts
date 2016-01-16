import Keyword from './Keyword';

export default class Enum extends Keyword {

  _value: any;

  constructor(...value: any[]) {
    super();

    value = Array.isArray(value) && value.length === 1 && Array.isArray(value[0]) ? value[0] : value;
    //console.log(JSON.stringify(value));
    this.value = value;
  }

  get value() {
    return this._value;
  }

  set value(value: any[]) {
    //console.log(JSON.stringify(value));
    if (!Array.isArray(value)) {
      value = Array.prototype.slice.call(value);
    }

    if (value.length) {
      this._value = value;
    } else {
      //console.log(JSON.stringify(value));
      throw new Error('value must be an array with at least one element: ...' + JSON.stringify(value));
    }
  }

  json(context) {
    context = context || {};
    context.enum = this.value;
    return context;
  }
}

