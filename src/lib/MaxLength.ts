import PositiveIntegerKeyword from './Base/PositiveIntegerKeyword';

export default class MaxLength extends PositiveIntegerKeyword {
  _key = "maxLength";
  constructor(value: Number) {
    super(value);
  }
}