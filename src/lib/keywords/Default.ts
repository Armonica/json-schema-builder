import {Keyword} from '../Base/Keyword';
import {Schema} from '../Schema';

export class Default extends Keyword {
	_key = "default";
	constructor(value: Object) {
		super();
		this.value = value;
	}

	get value():Object {
		return this._value;
	}

	set value(value:Object) {
		this._value = value;
	}

	_jsonConstraints(context) {
		return (this.value instanceof Schema)
			  ? (<Schema>this.value).json({})
				: this.value;
	}
}