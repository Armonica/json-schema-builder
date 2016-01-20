import {SchemaArrayKeyword} from '../Base/SchemaArrayKeyword';
import {Schema} from '../Schema';

export class OneOf extends SchemaArrayKeyword {
  _key = 'oneOf';
  constructor(value: Array<Schema>) {
    super(value);
  }
}
