import Keyword from './Keyword';
import Schema from './Schema';

export default class Default extends Keyword {

	_value: any;

	constructor(...value: any[]) {
		super();
		this.value = value.length === 1 ? value[0] : value;
	}

	get value() {
		return this._value;
	}

	set value(value) {
		this._value = value;
	}

	json(context) {
		context = context || {};

		const value = (this.value instanceof Schema)
			  ? this.value.json({})
				: this.value;

		context.default = value;

		return context;
	}
}