import {NumberKeyword} from '../Base/NumberKeyword';

export class Maximum extends NumberKeyword {
  _key = 'maximum';
  constructor(value: Number) {
    super(value);
  }
}