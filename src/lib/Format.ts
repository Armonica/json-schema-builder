import StringKeyword from './StringKeyword';
//import { includes } from '../../node_modules/lodash';

declare function require(name:string);
var _ = require('lodash');

let validFormats = [
	'date-time',
	'email',
	'hostname',
	'ipv4',
	'ipv6',
	'uri'
];

export default class Format extends StringKeyword {

	_value: any;

	constructor(...value: any[]) {
		super();
    value = value.length === 1 ? value[0] : value;
		this.value = value;
	}

	get value() {
		return this._value;
	}

	set value(value) {
		if (typeof value !== 'string') {
			throw new Error('value must be a string');
		}

		if (!_.includes(validFormats, value)) {
			throw new Error('value must be a valid format');
		}

		this._value = value;
	}

	json(context) {
		context = context || {};

		context.format = this.value;
		return context;
	}
}