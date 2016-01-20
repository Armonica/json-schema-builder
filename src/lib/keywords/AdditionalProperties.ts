import {Schema} from '../Schema';
import {BooleanOrSchemaKeyword} from '../Base/BooleanOrSchemaKeyword';

export class AdditionalProperties extends BooleanOrSchemaKeyword {
  _key = "additionalProperties";
  constructor(value: Boolean|Schema) {
    super(value);
  }
}

