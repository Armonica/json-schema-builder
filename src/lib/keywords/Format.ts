import StringKeyword from '../Base/StringKeyword';

let validFormats = [
	'date-time',
	'email',
	'hostname',
	'ipv4',
	'ipv6',
	'uri'
];

export default class Format extends StringKeyword {
	_key = "format";
	constructor(value: String) {
		super(value);
	}

	protected _setValue(value) {
		if (!~validFormats.indexOf(value)) {
			throw new Error('value must be a valid format');
		}
		this._value = value;
	}
}
