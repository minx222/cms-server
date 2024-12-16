import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SysUser {
	@Field(() => String)
	id: string;

	@Field(() => String)
	name: string;

	@Field(() => String)
	email: string;

	@Field(() => [String])
	roles: string[];

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;
}
