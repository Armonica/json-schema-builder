/**
 * Created by Paul on 1/17/2016.
 */

import Keyword from './Keyword';
import Schema from '../Schema';

export default class SchemaArrayKeyword extends Keyword {

  constructor(value: Array<Schema>) {
    super();
    this.value = value;//Array.isArray(value) && value.length === 1 ? value[0] : value;
  }

  get value(): Array<Schema> {
    return this._getValue();
  }

  set value(value: Array<Schema>) {
    if (!value.length) {
      throw new Error('value must be an array of values with at least one element');
    }
    //TODO: it is really needed?
    value.forEach(elem => {
      if (!(elem instanceof Schema)) {
        throw new Error('array value must be a valid Schema instance');
      }
    });

    this._setValue(value);
  }

  _jsonConstraints(context) {
    const props = [];

    this.value.forEach(elem => {
      props.push(elem.json(null));
    });

    return props;
  }
}
