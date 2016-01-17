import StringKeyword from '../Base/StringKeyword';

export default class Pattern extends StringKeyword {
  _key = 'pattern';
  constructor(value: String) {
    super(value);
  }
}