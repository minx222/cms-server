import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { createApp } from './factory';

import { env } from '@/config';

if (import.meta.env.PROD) {
	const app = await createApp();
	await app.listen(env.SERVER_PORT);
}

export const viteNodeApp: Promise<NestFastifyApplication> = createApp();
