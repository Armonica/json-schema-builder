import Keyword from './Keyword';
//import * as _ from 'lodash';

declare function require(name:string);
var _ = require('lodash');

const primitiveTypes = [
  'array',
  'object',
  'boolean',
  'integer',
  'number',
  'string',
  'null'
];

export default class Type extends Keyword {

  _value: any;

  constructor(...value: any[]) {
    super();
    value = value.length === 1 ? value[0] : value;
    this.value = value;//value.length > 1 ? Array.prototype.slice.call(value) : value;
  }

  set value(value) {
    if (typeof value != 'string' && !Array.isArray(value)) {
      throw new Error('value must be a string or an array of strings');
    }

    if (Array.isArray(value)) {
      value.forEach(t => {
        if (!_.includes(primitiveTypes, t)) {
          throw new Error('value array elements must be a string value that specifies a valid value: ' + t);
        }
      });
    }

    this._value = value;
  }

  get value() {
    return this._value;
  }

  json(context) {
    context = context || {};
    context.type = this.value;
    return context;
  }
}
