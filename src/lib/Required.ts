import ObjectKeyword from './ObjectKeyword';

export default class Required extends ObjectKeyword {

  _value: any;

  constructor(...value: any[]) {
    super();
    value = Array.isArray(value) && value.length === 1 && Array.isArray(value[0]) ? value[0] : value;

    if (!Array.isArray(value)) {
      value = Array.prototype.slice.call(value);
    }

    this.value = value;
    //this.value = Array.isArray(value) && value.length === 1 ? value[0] : value;
  }

  get value() {
    return this._value;
  }

  set value(value) {


    if (Array.isArray(value) && value.length) {
      this._value = value;
    } else {
      throw new Error('value must be an array of property names with at least one element: ' + JSON.stringify(value));
    }
  }

  json(context) {
    context = context || {};
    context.required = this.value;
    return context;
  }
}

