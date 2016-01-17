import PositiveIntegerDefault0Keyword from './Base/PositiveIntegerDefault0Keyword';

export default class MinItems extends PositiveIntegerDefault0Keyword {
  _key = "minProperties";
  constructor(value: Number) {
    super(value);
  }
}
