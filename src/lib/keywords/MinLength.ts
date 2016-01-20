import {PositiveIntegerDefault0Keyword} from '../Base/PositiveIntegerDefault0Keyword';

export class MinLength extends PositiveIntegerDefault0Keyword {
  _key = "minLength";
  constructor(value: Number) {
    super(value);
  }
}
