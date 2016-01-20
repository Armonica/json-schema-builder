import {PositiveIntegerKeyword} from '../Base/PositiveIntegerKeyword';

export class MaxItems extends PositiveIntegerKeyword {
  _key = 'maxItems';
  constructor(value: Number) {
    super(value);
  }
}
