import StringArrayKeyword from '../Base/StringArrayKeyword';
export default class Enum extends StringArrayKeyword {
  _key = "enum";
  constructor(value: Array<String>) {
    super(value);
  }
}
