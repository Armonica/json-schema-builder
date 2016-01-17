import StringKeyword from '../Base/StringKeyword';

export default class RefKeyword extends StringKeyword {
  _key = '$ref';
  constructor(value: String) {
    super(value);
  }
}
