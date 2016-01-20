import {SchemaArrayKeyword} from '../Base/SchemaArrayKeyword';
import {Schema} from '../Schema';

export class AllOf extends SchemaArrayKeyword {
  _key = 'allOf';
  constructor(value: Array<Schema>) {
    super(value);
  }
}
