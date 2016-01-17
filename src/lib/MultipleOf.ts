import PositiveNumberKeyword from './Base/PositiveNumberKeyword';

export default class MultipleOf extends PositiveNumberKeyword {
  _key = 'multipleOf';
  constructor(value: Number) {
    super(value);
  }
}
