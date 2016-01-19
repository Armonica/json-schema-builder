import StringArrayKeyword from '../Base/StringArrayKeyword';
export default class Required extends StringArrayKeyword {
  _key = "required";
  constructor(value: Array<String>) {
    super(value);
  }
}
