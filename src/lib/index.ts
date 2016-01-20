import {Schema} from './Schema';

export default class Build {

  protected static _schema() { return new Schema(); }

  static schema() { return Build._schema(); }

  static allOf(val: Array<Schema>) { return Build._schema().allOf(val); }
  static anyOf(val: Array<Schema>) { return Build._schema().anyOf(val); }
  static default(val: Object) { return Build._schema().default(val); }
  static enum(val:String|Array<String>) { return Build._schema().enum(val); }
  static not(val: Schema) { return Build._schema().not(val); }
  static oneOf(val: Array<Schema>) { return Build._schema().oneOf(val); }
  static type(val: String|Array<String>) { return Build._schema().type(val); }
  // generic helpers - type wrappers
  static array() { return Build._schema().array(); }
  static boolean() { return Build._schema().boolean(); }
  static integer() { return Build._schema().integer(); }
  static null() { return Build._schema().null(); }
  static number() { return Build._schema().number(); }
  static object() { return Build._schema().object(); }
  static string() { return Build._schema().string(); }
  // numeric helpers
  static exclusiveMaximum(val: Boolean) { return Build._schema().exclusiveMaximum(val); }
  static exclusiveMinimum(val: Boolean) { return Build._schema().exclusiveMinimum(val); }
  static maximum(val: Number) { return Build._schema().maximum(val); }
  static minimum(val: Number) { return Build._schema().minimum(val); }
  static multipleOf(val: Number) { return Build._schema().multipleOf(val); }
  // array helpers
  static additionalItems(val: Boolean|Schema) { return Build._schema().additionalItems(val); }
  static items(val: Schema|Array<Schema>) { return Build._schema().items(val); }
  static maxItems(val: Number) { return Build._schema().maxItems(val); }
  static minItems(val: Number) { return Build._schema().minItems(val); }
  static uniqueItems(val: Boolean) { return Build._schema().uniqueItems(val); }

  // object helpers
  static additionalProperties(val: Boolean|Schema) { return Build._schema().additionalProperties(val); }
  static definitions(val: Object) { return Build._schema().definitions(val); }
  static dependencies(val: Object) { return Build._schema().dependencies(val); }
  static maxProperties(val: Number) { return Build._schema().maxProperties(val); }
  static minProperties(val: Number) { return Build._schema().minProperties(val); }
  static patternProperties(val: Object) { return Build._schema().patternProperties(val); }
  static properties(val: Object) { return Build._schema().properties(val); }
  //static required() { return Build._schema().required(...arguments); }
  static required(val:String|Array<String>) { return Build._schema().required(val); }
  static $ref(val: String) { return Build._schema().$ref(val); }

  //TODO: function that in original has no implementation. To be done.
  //additionalProperty() { return Build._schema().additionalProperty(...arguments) }
  static patternProperty(name, value) { return Build._schema().patternProperty(name, value); }
  static property(name, value, required) { return Build._schema().property(name, value, required); }

  // string helpers
  static maxLength(val: Number) { return Build._schema().maxLength(val); }
  static minLength(val: Number) { return Build._schema().minLength(val); }
  static pattern(val: String) { return Build._schema().pattern(val); }
  static format(val: String) { return Build._schema().format(val); }
  static title(val: String) { return Build._schema().title(val); }
}
