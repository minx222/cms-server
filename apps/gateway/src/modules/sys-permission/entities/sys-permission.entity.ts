import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SysPermission {
	@Field(() => String)
	id: string;

	@Field(() => String)
	name: string;

	@Field(() => String, { nullable: true })
	description?: string;

	@Field(() => String)
	code: string;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => String)
	createdBy: string;

	@Field(() => Date)
	updatedAt: Date;

	@Field(() => String)
	updatedBy: string;

	@Field(() => Boolean)
	deleted: boolean;

	@Field(() => Date, { nullable: true })
	deletedAt?: Date;

	@Field(() => String, { nullable: true })
	deletedBy?: string;
}
