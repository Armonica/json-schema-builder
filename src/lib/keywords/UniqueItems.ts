import BooleanKeyword from '../Base/BooleanKeyword';

export default class UniqueItems extends BooleanKeyword {

  _key = "uniqueItems";

  constructor(value: Boolean) {
    super(value);
  }
}