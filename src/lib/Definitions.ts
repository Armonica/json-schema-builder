import Keyword from './Base/Keyword';
import Schema from './Schema';

export default class Definitions extends Keyword {

  _key = "definitions";

  constructor(...value: any[]) {
    super();

    //console.log('aaa');

    value = value.length === 1 ? value[0] : value;
    this.value = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (typeof value == 'object' && !Array.isArray(value)) {
      for (let prop in value) {
        if (!(prop instanceof Schema)) {
          throw new Error('value properties must be valid Schema instances');
        }
      }
      this._value = value;
    } else {
      throw new Error('value must be an object');
    }
  }

}