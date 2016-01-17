import Builder from './Builder';

export default class Keyword extends Builder {
  _key: string;
  _value: any;

  protected _getValue() {
    return this._value;
  }

  protected _setValue(value) {
    this._value = value;
  }

  protected _jsonConstraints(context) {
    return this._getValue();
  }

  json(context) {
    context = context || {};
    context[this._key] = this._jsonConstraints(context);
    return context;
  }
}
