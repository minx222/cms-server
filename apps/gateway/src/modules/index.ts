import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';

import { DateScalar } from '@/scalars';
import { PrismaModule } from '@/components';
import { RecipesModule } from './recipes/recipes.module';
import { SysRoleModule } from './sys-role/sys-role.module';

@Module({
	imports: [
		RecipesModule,
		SysRoleModule,
		PrismaModule,
		GraphQLModule.forRoot<MercuriusDriverConfig>({
			driver: MercuriusDriver,
			autoSchemaFile: 'schema.gql',
			subscription: true,
			graphiql: true,
		}),
	],
	providers: [DateScalar],
})
export class GraphQLModules {}
