declare function require(name:string);
var _ = require('lodash');

import {Keyword} from './Base/Keyword';

import {AdditionalItems} from './Keywords/AdditionalItems';
import {AdditionalProperties} from './Keywords/AdditionalProperties';
import {AllOf} from './Keywords/AllOf';
import {AnyOf} from './Keywords/AnyOf';
import {Builder} from './Base/Builder';
import {Default} from './Keywords/Default';
import {Definitions} from './Keywords/Definitions';
import {Dependencies} from './Keywords/Dependencies';
import {Enum} from './Keywords/Enum';
import {ExclusiveMaximum} from './Keywords/ExclusiveMaximum';
import {ExclusiveMinimum} from './Keywords/ExclusiveMinimum';
import {Format} from './Keywords/Format';
import {Items} from './Keywords/Items';

import {Maximum} from './Keywords/Maximum';
import {MaxItems} from './Keywords/MaxItems';
import {MaxLength} from './Keywords/MaxLength';
import {MaxProperties} from './Keywords/MaxProperties';
import {Minimum} from './Keywords/Minimum';
import {MinItems} from './Keywords/MinItems';
import {MinLength} from './Keywords/MinLength';
import {MinProperties} from './Keywords/MinProperties';
import {MultipleOf} from './Keywords/MultipleOf';
import {Not} from './Keywords/Not';
import {OneOf} from './Keywords/OneOf';
import {Pattern} from './Keywords/Pattern';
import {PatternProperties} from './Keywords/PatternProperties';
import {Properties} from './Keywords/Properties';
import {Ref} from './Keywords/Ref';
import {Required} from './Keywords/Required';
import {Title} from './Keywords/Title';
import {Type} from './Keywords/Type';
import {UniqueItems} from './Keywords/UniqueItems';

function isDefined(value) {
  return typeof value !== 'undefined';
}

export class Schema extends Builder {

  _keywords: any[] = [];

  constructor() {
    super();
  }

  get keywords() {
    //if (!this._keywords) this._keywords = [];
    return this._keywords;
  }

  addKeyword(keyword: Keyword) {
    this.keywords.push(keyword);
  }

  getKeyword(Class) {
    return this.keywords.find(keyword => keyword instanceof Class);
  }

  getKeywordValue(Class, defaultValue = undefined) {
    return _.result(this.keywords.find(keyword => keyword instanceof Class), 'value', defaultValue);
  }

  //type(...args: any[]) {
  type(val: String|Array<String>) {
    if (val && val.length) {
      this.addKeyword(
        new Type(val)
      );
      return this;
    }

    return this.getKeywordValue(Type);
  }

  // type convenience methods
  boolean() { return this.type('boolean'); }

  integer() { return this.type('integer'); }

  number() { return this.type('number'); }

  string() { return this.type('string'); }

  object() { return this.type('object'); }

  array() { return this.type('array'); }

  null() { return this.type('null'); }



  //required(...args: any[]) {
  required(val?:String|Array<String>) {
    if (val && val.length) {
      let value = Array.isArray(val) ? val : [val];
      this.addKeyword(new Required(value));
      return this;
    }

    return this.getKeywordValue(Required);
  }

  enum(val?:String|Array<String>) {
    if (val && val.length) {
      let value = Array.isArray(val) ? val : [val];
      this.addKeyword(new Enum(value));
      return this;
    }

    return this.getKeywordValue(Enum);
  }

  properties(val?: Object) {
    if (val) {
      this.addKeyword(new Properties(val));
      return this;
    }
    return this.getKeywordValue(Properties);
  }

  property(name, value, required) {
    if (isDefined(name)) {
      if (typeof name == 'object') {
        required = value;
        value = undefined;
        Object.keys(name).forEach(key => {
          this.property(key, name[key], required);
        });
        return this;
      }

      const properties = this.getKeyword(Properties);
      if (properties) {
        properties.add(name, value);
      } else {
        const prop = {};
        prop[name] = value || new Schema();
        this.properties(prop);
      }

      if (required) {
        if (this.required()) {
          this.required().push(name);
        } else {
          this.required([name]);
        }
      }

      return this;
    }

    const props = this.properties();
    if (props) {
      return props[name];
    }
  }

  patternProperties(val?: Object) {
    if (val) {
      this.addKeyword(new PatternProperties(val));
      return this;
    }

    return this.getKeywordValue(PatternProperties);
  }

  patternProperty(name, value) {
    if (isDefined(name)) {
      if (typeof name == 'object') {
        Object.keys(name).forEach(key => {
          this.patternProperty(key, name[key]);
        });
        return this;
      }

      const properties = this.getKeyword(PatternProperties);
      if (properties) {
        properties.add(name, value);
      } else {
        const prop = {};
        prop[name] = value || {};
        this.patternProperties(prop);
      }

      return this;
    }

    const props = this.patternProperties();
    if (props) {
      return props[name];
    }
  }

  additionalProperties(val: Boolean|Schema) {
    if (val || val === false) {
      this.addKeyword(new AdditionalProperties(val));
      return this;
    }
    return this.getKeywordValue(AdditionalProperties);
  }

  //TODO: to check the number of arguments
  allOf(val: Array<Schema>) {
    if (val.length) {
      this.addKeyword(new AllOf(val));
      return this;
    }

    return this.getKeywordValue(AllOf);
  }

  anyOf(val: Array<Schema>) {
    if (val.length) {
      this.addKeyword(new AnyOf(val));
      return this;
    }

    return this.getKeywordValue(AnyOf);
  }

  oneOf(val: Array<Schema>) {
    if (val.length) {
      this.addKeyword(new OneOf(val));
      return this;
    }

    return this.getKeywordValue(OneOf);
  }

  multipleOf(value) {
    if (value) {
      this.addKeyword(new MultipleOf(value));
      return this;
    }

    return this.getKeywordValue(MultipleOf);
  }

  //maximum(...args: any[]) {
  maximum(val: Number) {
    if (val || val === 0) {
      this.addKeyword(new Maximum(val));
      return this;
    }

    return this.getKeywordValue(Maximum);
  }

  exclusiveMaximum(val: Boolean) {
    if (val === false || val === true) {
      this.addKeyword(new ExclusiveMaximum(val));
      return this;
    }

    return this.getKeywordValue(ExclusiveMaximum);
  }

  minimum(val: Number) {
    if (val || val === 0) {
      this.addKeyword(new Minimum(val));
      return this;
    }

    return this.getKeywordValue(Minimum);
  }

  exclusiveMinimum(val: Boolean) {
    if (val === false || val === true) {
      this.addKeyword(new ExclusiveMinimum(val));
      return this;
    }

    return this.getKeywordValue(ExclusiveMinimum);
  }

  not(val: Schema) {
    if (val) {
      this.addKeyword(new Not(val));
      return this;
    }

    return this.getKeywordValue(Not);
  }

  maxProperties(val: Number) {
    if (val || val === 0) {
      this.addKeyword(new MaxProperties(val));
      return this;
    }

    return this.getKeywordValue(MaxProperties);
  }

  minProperties(val: Number) {
    if (val || val === 0) {
      this.addKeyword(new MinProperties(val));
      return this;
    }

    return this.getKeywordValue(MaxProperties);
  }

  additionalItems(val: Boolean|Schema) {
    if (val || val === false) {
      this.addKeyword(new AdditionalItems(val));
      return this;
    }

    return this.getKeywordValue(AdditionalItems);
  }

  items(val: Schema|Array<Schema>) {
    if (val) {
      this.addKeyword(new Items(val));
      return this;
    }

    return this.getKeywordValue(Items);
  }

  maxItems(val: Number) {
    if (val || val === 0) {
      this.addKeyword(new MaxItems(val));
      return this;
    }

    return this.getKeywordValue(MaxItems);
  }

  minItems(val: Number) {
    if (val || val === 0) {
      this.addKeyword(new MinItems(val));
      return this;
    }

    return this.getKeywordValue(MinItems);
  }

  uniqueItems(val: Boolean) {
    if (val === true || val === false) {
      this.addKeyword(new UniqueItems(val));
      return this;
    }

    return this.getKeywordValue(UniqueItems);
  }

  maxLength(val: Number) {
    if (val || val === 0) {
      this.addKeyword(new MaxLength(val));
      return this;
    }

    return this.getKeywordValue(MaxLength);
  }

  minLength(val: Number) {
    if (val || val === 0) {
      this.addKeyword(new MinLength(val));
      return this;
    }

    return this.getKeywordValue(MinLength);
  }

  pattern(val: String) {
    if (val) {
      this.addKeyword(new Pattern(val));
      return this;
    }

    return this.getKeywordValue(Pattern);
  }

  definitions(val: Object) {
    if (val) {
      this.addKeyword(new Definitions(val));
      return this;
    }

    return this.getKeywordValue(Definitions);
  }

  dependencies(val: Object) {
    if (val) {
      this.addKeyword(new Dependencies(val));
      return this;
    }

    return this.getKeywordValue(Dependencies);
  }

  $ref(val: String) {
    if (val) {
      this.addKeyword(new Ref(val));
      return this;
    }

    return this.getKeywordValue(Ref);
  }

  title(val) {
    if (arguments.length) {
      this.addKeyword(new Title(val));
      return this;
    }

    return this.getKeywordValue(Title);
  }

  json(context) {
    context = context || {};

    this.keywords.forEach(keyword => {
      keyword.json(context);
    });

    return context;
  }

	format(val: String) {
		if (val) {
			this.addKeyword(
        new Format(val)
      );
			return this;
		}

		return this.getKeywordValue(Format);
	}

	default(val: Object) {
		if (val) {
			this.addKeyword(new Default(val));
			return this;
		}

		return this.getKeywordValue(Default);
	}

}

