import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSysUserInput {
	@Field(() => String)
	name: string;

	@Field(() => String)
	email: string;

	@Field(() => [BigInt])
	roles: bigint[];
}
