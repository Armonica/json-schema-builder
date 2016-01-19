import ObjectKeyword from '../Base/ObjectKeyword';
export default class PatternProperties extends ObjectKeyword {
  _key = "patternProperties";
  constructor(value: Object) {
    super(value);
  }
}
