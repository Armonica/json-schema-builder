import PositiveIntegerDefault0Keyword from '../Base/PositiveIntegerDefault0Keyword';

export default class MinItems extends PositiveIntegerDefault0Keyword {
  _key = "minItems";
  constructor(value: Number) {
    super(value);
  }
}
