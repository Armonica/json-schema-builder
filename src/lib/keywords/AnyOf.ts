import SchemaArrayKeyword from '../Base/SchemaArrayKeyword';
import Schema from '../Schema';

export default class AnyOf extends SchemaArrayKeyword {
  _key = 'anyOf';
  constructor(value: Array<Schema>) {
    super(value);
  }
}
