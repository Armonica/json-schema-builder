/**
 * Created by Paul on 1/17/2016.
 */
import {PositiveIntegerKeyword} from './PositiveIntegerKeyword';

export class PositiveIntegerDefault0Keyword extends PositiveIntegerKeyword {

  constructor(value?: Number) {
    if(!value) {
      value = 0;
    }
    super(value);
  }
}
