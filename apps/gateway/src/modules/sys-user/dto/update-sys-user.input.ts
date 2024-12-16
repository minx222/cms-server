import { SysUser } from '../entities/sys-user.entity';
import { InputType, Field, PickType } from '@nestjs/graphql';

@InputType()
export class UpdateSysUserInput extends PickType(SysUser, ['id']) {
	@Field(() => String)
	name: string;

	@Field(() => String)
	email: string;

	@Field(() => [BigInt])
	roles: bigint[];
}
