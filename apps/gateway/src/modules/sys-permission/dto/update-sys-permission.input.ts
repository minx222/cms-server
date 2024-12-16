import { CreateSysPermissionInput } from './create-sys-permission.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSysPermissionInput extends PartialType(
	CreateSysPermissionInput
) {
	@Field(() => String)
	id: string;
}
