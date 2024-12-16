import { CreateSysPermissionInput } from './create-sys-permission.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSysPermissionInput extends PartialType(
	CreateSysPermissionInput
) {
	@Field(() => Int)
	id: number;
}
