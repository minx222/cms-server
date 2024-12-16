import { Request, Response } from 'express';
import {
	ExceptionFilter,
	Catch,
	ArgumentsHost,
	HttpException,
	HttpStatus,
} from '@nestjs/common';
import _ from 'lodash';
import { ServiceError } from '../exceptions';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();

		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();
		const status = exception.getStatus();

		if (exception instanceof ServiceError) {
			const error = exception.getResponse();
			response.status(HttpStatus.OK).send({
				data: null,
				status: _.get(error, 'code', 500),
				extra: {
					reason: _.get(error, 'message', '服务器异常'),
				},
				message: _.get(error, 'message', '服务器异常'),
				success: false,
			});
		}

		// 其它异常处理
		response.status(status).send({
			statusCode: status,
			timestamp: new Date().toISOString(),
			path: request.url,
			message: exception.getResponse(),
		});
	}
}
