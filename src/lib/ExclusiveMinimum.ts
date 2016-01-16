import NumberKeyword from './NumberKeyword';

export default class ExclusiveMinimum extends NumberKeyword {

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

    if (!context.hasOwnProperty('minimum')) {
      throw new Error('minimum must be present with exclusiveMinimum');
    }

    context.exclusiveMinimum = this.value;
    return context;
  }
}