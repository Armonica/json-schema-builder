import Schema from './Schema';

export default class Builder {

  protected static _schema() { return new Schema(); }

  static schema() { return Builder._schema(); }

  static allOf(val: Array<Schema>) { return Builder._schema().allOf(val); }
  static anyOf(val: Array<Schema>) { return Builder._schema().anyOf(val); }
  static default(...args: any[]) { return Builder._schema().default(...args); }
  static enum(val:String|Array<String>) { return Builder._schema().enum(val); }
  static not() { return Builder._schema().not(...arguments); }
  static oneOf(val: Array<Schema>) { return Builder._schema().oneOf(val); }
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
  static exclusiveMaximum(val: Boolean) { return Builder._schema().exclusiveMaximum(val); }
  static exclusiveMinimum(val: Boolean) { return Builder._schema().exclusiveMinimum(val); }
  static maximum(val: Number) { return Builder._schema().maximum(val); }
  static minimum(val: Number) { return Builder._schema().minimum(val); }
  static multipleOf(val: Number) { return Builder._schema().multipleOf(val); }
  // array helpers
  static additionalItems(val: Boolean|Schema) { return Builder._schema().additionalItems(val); }
  static items() { return Builder._schema().items(...arguments); }
  static maxItems(val: Number) { return Builder._schema().maxItems(val); }
  static minItems(val: Number) { return Builder._schema().minItems(val); }
  static uniqueItems(val: Boolean) { return Builder._schema().uniqueItems(val); }

  // object helpers
  static additionalProperties(val: Boolean|Schema) { return Builder._schema().additionalProperties(val); }
  static definitions(val: Object) { return Builder._schema().definitions(val); }
  static dependencies() { return Builder._schema().dependencies(...arguments); }
  static maxProperties(val: Number) { return Builder._schema().maxProperties(val); }
  static minProperties(val: Number) { return Builder._schema().minProperties(val); }
  static patternProperties(val: Object) { return Builder._schema().patternProperties(val); }
  static properties(val: Object) { return Builder._schema().properties(val); }
  //static required() { return Builder._schema().required(...arguments); }
  static required(val:String|Array<String>) { return Builder._schema().required(val); }
  static $ref(val: String) { return Builder._schema().$ref(val); }

  //TODO: function that in original has no implementation. To be done.
  //additionalProperty() { return Builder._schema().additionalProperty(...arguments) }
  static patternProperty(name, value) { return Builder._schema().patternProperty(name, value); }
  static property(name, value, required) { return Builder._schema().property(name, value, required); }

  // string helpers
  static maxLength(val: Number) { return Builder._schema().maxLength(val); }
  static minLength(val: Number) { return Builder._schema().minLength(val); }
  static pattern(val: String) { return Builder._schema().pattern(val); }
  static format(val: String) { return Builder._schema().format(val); }
  static title(val: String) { return Builder._schema().title(val); }
}
