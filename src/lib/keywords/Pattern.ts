import {StringKeyword} from '../Base/StringKeyword';

export class Pattern extends StringKeyword {
  _key = 'pattern';
  constructor(value: String) {
    super(value);
  }
}