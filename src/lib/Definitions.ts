import Keyword from './Base/Keyword';
import Schema from './Schema';
// TODO: try finding a better way than Object type
export default class Definitions extends Keyword {

  _key = "definitions";

  constructor(value: Object) {
    super();
    this.value = value;
  }

  get value(): Object {
    return this._value;
  }


  set value(value: Object) {
    for (let key of Object.keys(value)) {
      let prop = value[key];
      if (!(prop instanceof Schema)) {
        throw new Error('value properties must be valid Schema instances');
      }
    }
    this._value = value;
  }

  _jsonConstraints(context) {
    const props = {};

    for (let key of Object.keys(this.value)) {
      let elem = this.value[key];
      props[key] = elem.json(null);
    }

    return props;
  }

}