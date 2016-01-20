import {NumberKeyword} from '../Base/NumberKeyword';

export class Minimum extends NumberKeyword {
  _key = 'minimum';
  constructor(value: Number) {
    super(value);
  }
}