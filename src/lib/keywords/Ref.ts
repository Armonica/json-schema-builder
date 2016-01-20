import {StringKeyword} from '../Base/StringKeyword';

export class Ref extends StringKeyword {
  _key = '$ref';
  constructor(value: String) {
    super(value);
  }
}
