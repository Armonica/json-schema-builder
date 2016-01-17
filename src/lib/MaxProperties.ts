import PositiveIntegerKeyword from './Base/PositiveIntegerKeyword';

export default class MaxItems extends PositiveIntegerKeyword {
  _key = 'maxProperties';
  constructor(value: Number) {
    super(value);
  }
}
