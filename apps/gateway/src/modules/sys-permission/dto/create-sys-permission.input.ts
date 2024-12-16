import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSysPermissionInput {
	@Field(() => String)
	name: string;

	@Field(() => String, { nullable: true })
	description?: string;

	@Field(() => String)
	code: string;
}
