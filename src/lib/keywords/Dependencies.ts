import {Keyword} from '../Base/Keyword';
import {Schema} from '../Schema';

export class Dependencies extends Keyword {
  _key = 'dependencies';
  constructor(value: Object) {
    super();
    this.value = value;
  }

  get value(): Object {
    return this._value;
  }

  set value(value: Object) {
    //TODO: check uniqueness of string elems
    for (let prop in value) {
      if (Array.isArray(prop)) {
        if (!prop.length) {
          throw new Error('array must have at least one item');
        }

        //if (_.uniq(prop).length != prop.length) {
        //  throw new Error('array items must be unique');
        //}

        prop.forEach(elem => {
          if (typeof elem !== 'string') {
            throw new Error('array items must strings');
          }
        });
      }
    }
    this._value = value;
  }

  _jsonConstraints(context) {
    const props = {};
    Object.keys(this.value).forEach(key => {
      let ctx = {};
      const value = this.value[key];
      props[key] = (value instanceof Schema)
          ? this.value[key].json(ctx)
          : this.value[key];
    });
  return props;
  }
}
