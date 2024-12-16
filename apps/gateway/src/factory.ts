import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { env } from './config';
export const createApp = async (): Promise<NestFastifyApplication> => {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter()
	);

	// 跨域
	app.enableCors();

	app.setGlobalPrefix(env.PUBLIC_PATH);

	// 启动全局字段校验，保证请求接口字段校验正确。
	app.useGlobalPipes(new ValidationPipe());

	return app;
};
