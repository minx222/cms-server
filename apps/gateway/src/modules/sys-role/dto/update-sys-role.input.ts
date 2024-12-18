import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateSysRoleInput } from './create-sys-role.input';

@InputType()
export class UpdateSysRoleInput extends PartialType(CreateSysRoleInput) {
	@Field(() => String)
	id: string;
}
