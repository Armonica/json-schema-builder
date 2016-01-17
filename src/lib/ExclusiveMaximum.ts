import BooleanKeyword from './Base/BooleanKeyword';

export default class ExclusiveMaximum extends BooleanKeyword {

  _key = "exclusiveMaximum";

  constructor(value: Boolean) {
    super(value);
  }

  protected _jsonConstraints(context) {
    if (!context.hasOwnProperty('maximum')) {
      throw new Error("maximum must be present with exclusiveMaximum");
    }
    return this._getValue();
  }
}
