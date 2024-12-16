export class BaseError extends Error {
	code: number;

	reason: string;

	constructor(reason: string, message: string, code = 500) {
		super(message);
		this.code = code;
		this.reason = reason;
	}

	toString() {
		return `${this.code}: ${this.message}`;
	}
}
