import { Field, InputType, OmitType } from '@nestjs/graphql';
import { SysRole } from '../entities/sys-role.entity';

@InputType()
export class CreateSysRoleInput extends OmitType(SysRole, [
	'id',
	'createdAt',
	'updatedAt',
]) {
	@Field(() => String)
	name: string;
}
