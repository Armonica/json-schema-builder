import {BooleanKeyword} from '../Base/BooleanKeyword';

export class ExclusiveMinimum extends BooleanKeyword {

  _key = "exclusiveMinimum";

  constructor(value: Boolean) {
    super(value);
  }

  protected _jsonConstraints(context) {
    if (!context.hasOwnProperty('minimum')) {
      throw new Error("maximum must be present with exclusiveMinimum");
    }
    return this._getValue();
  }
}
