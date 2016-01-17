import Builder from './Base/Builder';
import Schema from './Schema';
import ObjectKeyword from './ObjectKeyword';


export default class Properties extends ObjectKeyword {
  _value: any;
  constructor(...value: any[]) {
    super();
    //console.log(JSON.stringify(value));
    value = Array.isArray(value) && value.length === 1 ? value[0] : value;



    this.value = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    //if (!Array.isArray(value)) {
    //  value = Array.prototype.slice.call(value);
    //}

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


    if (this.value) {
      this.value[name] = value || {};
    } else {
      const prop = {};
      prop[name] = value || {};
      this.value = prop;
    }
  }

  json(context) {
    context = context || {};

    if (this.value) {
      const props = {};
      Object.keys(this.value).forEach(key => {
        let ctx = {};
        const value = this.value[key];
        props[key] = (value instanceof Builder)
            ? this.value[key].json(ctx)
            : this.value[key];
      });

      context.properties = props;
    }

    return context;
  }
}
