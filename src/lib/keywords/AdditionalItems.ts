import Schema from '../Schema';
import BooleanOrSchemaKeyword from '../Base/BooleanOrSchemaKeyword';

export default class AdditionalItems extends BooleanOrSchemaKeyword {
  _key = "additionalItems";
  constructor(value: Boolean|Schema) {
    super(value);
  }
}
