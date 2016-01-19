import ArrayKeyword from './Base/Keyword';
import Schema from './Schema';

export default class Items extends ArrayKeyword {

  _value: any;

  constructor(...value: any[]) {
    super();
    //this.value = arguments.length > 1 ? Array.prototype.slice.call(arguments) : value;
    this.value = Array.isArray(value) && value.length === 1 ? value[0] : value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
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

  json(context) {
    context = context || {};

    if (this.value) {
      let props;

      if (this.value instanceof Schema) {
        props = this.value.json();
      } else {
        props = [];

        this.value.forEach(elem => {
          props.push(elem instanceof Schema ? elem.json() : elem);
        });
      }

      context.items = props;
    }

    return context;
  }
}