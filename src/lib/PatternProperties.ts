import Builder from './Builder';
import Schema from './Schema';
import ObjectKeyword from './ObjectKeyword';

export default class PatternProperties extends ObjectKeyword {
  _value: any;
  constructor(...value: any[]) {
    super();
    value = value.length === 1 ? value[0] : value;
    this.value = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (typeof value == 'object') {
      this._value = value;
    } else {
      throw new Error('value must be an object');
    }
  }

  add(name, value) {
    if (typeof name == 'object') {
      Object.keys(name).forEach(key => {
        this.add(key, name[key]);
      });
      return;
    }

    if (typeof name != 'string') {
      throw new Error('name must be a string and should be a valid regular expression');
    }

    if (typeof value != 'object' && value instanceof Schema) {
      throw new Error('value must be a valid Schema instance');
    }

    if (this.value) {
      this.value[name] = value;
    } else {
      const prop = {};
      prop[name] = value;
      this.value = prop;
    }
  }

  json(context) {
    context = context || {};

    if (this.value) {
      const props = {};
      Object.keys(this.value).forEach(key => {
        const value = this.value[key];
        props[key] = (value instanceof Builder)
            ? this.value[key].json()
            : this.value[key];
      });

      context.patternProperties = props;
    }

    return context;
  }
}
