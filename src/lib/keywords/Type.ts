import {Keyword} from '../Base/Keyword';

const primitiveTypes = [
  'array',
  'object',
  'boolean',
  'integer',
  'number',
  'string',
  'null'
];

export class Type extends Keyword {
  _key = "type";

  constructor(value: String|Array<String>) {
    super();
    this.value = value;
  }

  set value(value: String|Array<String>) {
    if (typeof value != 'string' && !Array.isArray(value)) {
      throw new Error('value must be a string or an array of strings');
    }
    //TODO: check uniqueness, too
    if (Array.isArray(value)) {
      value.forEach(t => {
        if (!~primitiveTypes.indexOf((<string>t))) {
          throw new Error('value array elements must be a string value that specifies a valid value: ' + t);
        }
      });
    }
    this._value = value;
  }

  get value(): String|Array<String> {
    return this._value;
  }
}
