import ObjectKeyword from '../Base/ObjectKeyword';
import Schema from '../Schema';
// TODO: try finding a better way than Object type
export default class Definitions extends ObjectKeyword {
  _key = "definitions";
  constructor(value: Object) {
    super(value);
  }
}
