import { SysRole } from '../entities/sys-role.entity';
import { Field, InputType, OmitType } from '@nestjs/graphql';

@InputType()
export class UpdateSysRoleInput extends OmitType(SysRole, [
	'createdAt',
	'updatedAt',
]) {
	@Field(() => String)
	id: string;

	@Field(() => String)
	name: string;
}
