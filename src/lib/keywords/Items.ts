import Keyword from '../Base/Keyword';
import Schema from '../Schema';

export default class Items extends Keyword {
  _key = 'items';
  constructor(value: Schema|Array<Schema>) {
    super();
    this.value = value;
  }

  get value():Schema|Array<Schema> {
    return this._value;
  }

  set value(value:Schema|Array<Schema>) {
    if (value instanceof Schema || Array.isArray(value)) {
      if (Array.isArray(value)) {
        value.forEach(v => {
          if (!(v instanceof Schema)) {
            throw new Error('array values must be Schema instances');
          }
        });
      }
      this._value = value;
    } else {
      throw new Error('value must be an array or a Schema instance');
    }
  }

  _jsonConstraints(context) {
    let props;
    if (this.value instanceof Schema) {
      props = (<Schema>this.value).json(null);
    } else {
      props = [];
      (<Array<Schema>>this.value).forEach(elem => {
        props.push(<Schema>elem.json(null));
      });
    }
    return props;
  }
}
