import { Module } from '@nestjs/common';

import { GraphQLModules } from './modules';

@Module({
	imports: [GraphQLModules],
})
export class AppModule {}
