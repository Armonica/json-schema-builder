//import * as _ from 'lodash';
declare function require(name:string);
var _ = require('lodash');

//import { writeFile, writeFileSync } from 'fs';
//import { join } from 'path';

import AdditionalItems from './AdditionalItems';
import AdditionalProperties from './AdditionalProperties';
import AllOf from './AllOf';
import AnyOf from './AnyOf';
import Builder from './Builder';
import Default from './Default';
import Definitions from './Definitions';
import Dependencies from './Dependencies';
import Enum from './Enum';
import ExclusiveMaximum from './ExclusiveMaximum';
import ExclusiveMinimum from './ExclusiveMinimum';
import Format from './Format';
import Items from './Items';
import Keyword from './Keyword';
import Maximum from './Maximum';
import MaxItems from './MaxItems';
import MaxLength from './MaxLength';
import MaxProperties from './MaxProperties';
import Minimum from './Minimum';
import MinItems from './MinItems';
import MinLength from './MinLength';
import MinProperties from './MinProperties';
import MultipleOf from './MultipleOf';
import Not from './Not';
import OneOf from './OneOf';
import Pattern from './Pattern';
import PatternProperties from './PatternProperties';
import Properties from './Properties';
import RefKeyword from './RefKeyword';
import Required from './Required';
import Title from './Title';
import Type from './Type';
import UniqueItems from './UniqueItems';

function isDefined(value) {
  return typeof value !== 'undefined';
}

export default class Schema extends Builder {

  _keywords: any[] = [];

  constructor() {
    super();
  }

  get keywords() {
    //if (!this._keywords) this._keywords = [];
    return this._keywords;
  }

  addKeyword(keyword: Type) {
    this.keywords.push(keyword);
  }

  getKeyword(Class) {
    return _.find(this.keywords, keyword => keyword instanceof Class);
  }

  getKeywordValue(Class, defaultValue = undefined) {
    return _.result(_.find(this.keywords, keyword => keyword instanceof Class), 'value', defaultValue);
  }

  type(...args: any[]) {
    if (args.length) {
      this.addKeyword(
        new Type(...args)
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

  required(...args: any[]) {
    if (args.length) {
      this.addKeyword(new Required(...args));
      return this;
    }

    return this.getKeywordValue(Required);
  }

  enum(...args: any[]) {
    if (args.length) {
      this.addKeyword(new Enum(...args));
      return this;
    }

    return this.getKeywordValue(Enum);
  }

  properties(...args: any[]) {
    if (args.length) {
      this.addKeyword(new Properties(...args));
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
        prop[name] = value || {};
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

  patternProperties(...args: any[]) {
    if (arguments.length) {
      this.addKeyword(new PatternProperties(...args));
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

  additionalProperties(...args: any[]) {
    if (args.length) {
      this.addKeyword(new AdditionalProperties(...args));
      return this;
    }

    return this.getKeywordValue(AdditionalProperties);
  }

  allOf(...args: any[]) {
    if (arguments.length) {
      this.addKeyword(new AllOf(...args));
      return this;
    }

    return this.getKeywordValue(AllOf);
  }

  anyOf(...args: any[]) {
    if (arguments.length) {
      this.addKeyword(new AnyOf(...args));
      return this;
    }

    return this.getKeywordValue(AnyOf);
  }

  oneOf(...args: any[]) {
    if (arguments.length) {
      this.addKeyword(new OneOf(...args));
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

  maximum(...args: any[]) {
    if (args.length) {
      this.addKeyword(new Maximum(...args));
      return this;
    }

    return this.getKeywordValue(Maximum);
  }

  exclusiveMaximum(...args: any[]) {
    if (args.length) {
      this.addKeyword(new ExclusiveMaximum(...args));
      return this;
    }

    return this.getKeywordValue(ExclusiveMaximum);
  }

  minimum(...args: any[]) {
    if (args.length) {
      this.addKeyword(new Minimum(...args));
      return this;
    }

    return this.getKeywordValue(Minimum);
  }

  exclusiveMinimum(...args: any[]) {
    if (args.length) {
      this.addKeyword(new ExclusiveMinimum(...args));
      return this;
    }

    return this.getKeywordValue(ExclusiveMinimum);
  }

  not(...args: any[]) {
    if (args.length) {
      this.addKeyword(new Not(...args));
      return this;
    }

    return this.getKeywordValue(Not);
  }

  maxProperties(...args: any[]) {
    if (args.length) {
      this.addKeyword(new MaxProperties(...args));
      return this;
    }

    return this.getKeywordValue(MaxProperties);
  }

  minProperties(...args: any[]) {
    if (args.length) {
      this.addKeyword(new MinProperties(...args));
      return this;
    }

    return this.getKeywordValue(MaxProperties);
  }

  additionalItems(...args: any[]) {
    if (args.length) {
      this.addKeyword(new AdditionalItems(...args));
      return this;
    }

    return this.getKeywordValue(AdditionalItems);
  }

  items(...args: any[]) {
    if (args.length) {
      this.addKeyword(new Items(...args));
      return this;
    }

    return this.getKeywordValue(Items);
  }

  maxItems(...args: any[]) {
    if (args.length) {
      this.addKeyword(new MaxItems(...args));
      return this;
    }

    return this.getKeywordValue(MaxItems);
  }

  minItems(...args: any[]) {
    if (args.length) {
      this.addKeyword(new MinItems(...args));
      return this;
    }

    return this.getKeywordValue(MinItems);
  }

  uniqueItems(...args: any[]) {
    if (args.length) {
      this.addKeyword(new UniqueItems(...args));
      return this;
    }

    return this.getKeywordValue(UniqueItems);
  }

  maxLength(...args: any[]) {
    if (args.length) {
      this.addKeyword(new MaxLength(...args));
      return this;
    }

    return this.getKeywordValue(MaxLength);
  }

  minLength(...args: any[]) {
    if (args.length) {
      this.addKeyword(new MinLength(...args));
      return this;
    }

    return this.getKeywordValue(MinLength);
  }

  pattern(...args: any[]) {
    if (args.length) {
      this.addKeyword(new Pattern(...args));
      return this;
    }

    return this.getKeywordValue(Pattern);
  }

  definitions(...args: any[]) {
    if (args.length) {
      this.addKeyword(new Definitions(...args));
      return this;
    }

    return this.getKeywordValue(Definitions);
  }

  dependencies(...args: any[]) {
    if (args.length) {
      this.addKeyword(new Dependencies(...args));
      return this;
    }

    return this.getKeywordValue(Dependencies);
  }

  $ref(...args: any[]) {
    if (args.length) {
      this.addKeyword(new RefKeyword(...args));
      return this;
    }

    return this.getKeywordValue(RefKeyword);
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

	format(...args: any[]) {
		if (args.length) {
			this.addKeyword(
        new Format(...args)
      );
			return this;
		}

		return this.getKeywordValue(Format);
	}

	default(...args: any[]) {
		if (args.length) {
			this.addKeyword(new Default(...args));
			return this;
		}

		return this.getKeywordValue(Default);
	}

/*
  save() {
    const context = typeof arguments[0] == 'object' ? arguments[0] : null;
    const callback = arguments.length && typeof arguments[arguments.length - 1] == 'function' ? arguments[arguments.length - 1] : null;

    if (callback && arguments.length == 1 || !arguments.length) throw new Error('missing filename argument');

    const begin = context ? 1 : 0;
    const end = callback ? arguments.length - 1 : arguments.length;
    const args = Array.prototype.slice.call(arguments, begin, end);
    const pathname = join(...args);
    const json = JSON.stringify(this.json(context), null, 2);

    callback ? writeFile(pathname, json, 'utf8', callback) : writeFileSync(pathname, json, 'utf8');
  }
  */
}

