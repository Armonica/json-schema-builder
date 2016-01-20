/**
 * Created by Paul on 1/16/2016.
 */
import {StringKeyword} from '../Base/StringKeyword';

export class Title extends StringKeyword {
  _key = '$ref';
  constructor(value: String) {
    super(value);
  }
}
