import Schema from './Schema';

export default class Builder {

  private static _schema() { return new Schema(); }

  static schema() { return Builder._schema(); }

  static allOf(...args: any[]) { return Builder._schema().allOf(...args); }
  static anyOf(...args: any[]) { return Builder._schema().anyOf(...args); }
  static default(...args: any[]) { return Builder._schema().default(...args); }
  static enum() { return Builder._schema().enum(...arguments); }
  static not() { return Builder._schema().not(...arguments); }
  static oneOf() { return Builder._schema().oneOf(...arguments); }
  static type() { return Builder._schema().type(...arguments); }
  // generic helpers - type wrappers
  static array() { return Builder._schema().array(); }
  static boolean() { return Builder._schema().boolean(); }
  static integer() { return Builder._schema().integer(); }
  static null() { return Builder._schema().null(); }
  static number() { return Builder._schema().number(); }
  static object() { return Builder._schema().object(); }
  static string() { return Builder._schema().string(); }
  // numeric helpers
  static exclusiveMaximum() { return Builder._schema().exclusiveMaximum(...arguments); }
  static exclusiveMinimum() { return Builder._schema().exclusiveMinimum(...arguments); }
  static maximum() { return Builder._schema().maximum(...arguments); }
  static minimum() { return Builder._schema().minimum(...arguments); }
  static multipleOf(val: Number) { return Builder._schema().multipleOf(val); }
  // array helpers
  static additionalItems() { return Builder._schema().additionalItems(...arguments); }
  static items() { return Builder._schema().items(...arguments); }
  static maxItems() { return Builder._schema().maxItems(...arguments); }
  static minItems() { return Builder._schema().minItems(...arguments); }
  static uniqueItems() { return Builder._schema().uniqueItems(...arguments); }

  // object helpers
  static additionalProperties(...args: any[]) { return Builder._schema().additionalProperties(...args); }
  static definitions() { return Builder._schema().definitions(...arguments); }
  static dependencies() { return Builder._schema().dependencies(...arguments); }
  static maxProperties(...args: any[]) { return Builder._schema().maxProperties(...args); }
  static minProperties() { return Builder._schema().minProperties(...arguments); }
  static patternProperties() { return Builder._schema().patternProperties(...arguments); }
  static properties() { return Builder._schema().properties(...arguments); }
  static required() { return Builder._schema().required(...arguments); }
  static $ref() { return Builder._schema().$ref(...arguments); }

  //TODO: function that in original has no implementation. To be done.
  //additionalProperty() { return Builder._schema().additionalProperty(...arguments) }
  static patternProperty(name, value) { return Builder._schema().patternProperty(name, value); }
  static property(name, value, required) { return Builder._schema().property(name, value, required); }

  // string helpers
  static maxLength() { return Builder._schema().maxLength(...arguments); }
  static minLength() { return Builder._schema().minLength(...arguments); }
  static pattern() { return Builder._schema().pattern(...arguments); }
  static format() { return Builder._schema().format(...arguments); }
}
