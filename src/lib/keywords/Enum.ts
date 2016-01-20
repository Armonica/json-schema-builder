import {StringArrayKeyword} from '../Base/StringArrayKeyword';
export class Enum extends StringArrayKeyword {
  _key = "enum";
  constructor(value: Array<String>) {
    super(value);
  }
}
