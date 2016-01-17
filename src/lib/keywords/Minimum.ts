import NumberKeyword from '../Base/NumberKeyword';

export default class Minimum extends NumberKeyword {
  _key = 'minimum';
  constructor(value: Number) {
    super(value);
  }
}