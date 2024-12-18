import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSysRoleInput {
	@Field(() => String)
	name: string;

	@Field(() => String)
	code: string;

	@Field(() => String, { nullable: true })
	description?: string;

	@Field(() => [String])
	permission?: string[];
}
