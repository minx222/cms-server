import type { Request, Response } from 'express';

import {
	ExceptionFilter,
	Catch,
	ArgumentsHost,
	HttpStatus,
	ServiceUnavailableException,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
	catch(exception: Error, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();
		// request./
		console.error(exception.message, 'exception');

		// 非 HTTP 标准异常的处理。
		response.status(HttpStatus.SERVICE_UNAVAILABLE).send({
			statusCode: HttpStatus.SERVICE_UNAVAILABLE,
			timestamp: new Date().toISOString(),
			path: request.url,
			message: new ServiceUnavailableException().getResponse(),
		});
	}
}
