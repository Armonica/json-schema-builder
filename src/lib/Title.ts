/**
 * Created by Paul on 1/16/2016.
 */

import Keyword from './Keyword';

export default class Title extends Keyword {

  _value: any;

  constructor(value) {
    super();
    this.value = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (typeof value != 'string') {
      // TODO better validation
      throw new Error('value must be a valid string');
    }

    this._value = value;
  }

  json(context) {
    context = context || {};
    context.title = this.value;
    return context;
  }
}
