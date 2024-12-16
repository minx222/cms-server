import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SysPermissionService } from './sys-permission.service';
import { SysPermission } from './entities/sys-permission.entity';
import { CreateSysPermissionInput } from './dto/create-sys-permission.input';
import { UpdateSysPermissionInput } from './dto/update-sys-permission.input';

@Resolver(() => SysPermission)
export class SysPermissionResolver {
	constructor(private readonly sysPermissionService: SysPermissionService) {}

	@Mutation(() => SysPermission)
	createSysPermission(
		@Args('createSysPermissionInput')
		createSysPermissionInput: CreateSysPermissionInput
	) {
		return this.sysPermissionService.create(createSysPermissionInput);
	}

	@Query(() => [SysPermission], { name: 'sysPermission' })
	findAll() {
		return this.sysPermissionService.findAll();
	}

	@Query(() => SysPermission, { name: 'sysPermission' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.sysPermissionService.findOne(id);
	}

	@Mutation(() => SysPermission)
	updateSysPermission(
		@Args('updateSysPermissionInput')
		updateSysPermissionInput: UpdateSysPermissionInput
	) {
		return this.sysPermissionService.update(
			updateSysPermissionInput.id,
			updateSysPermissionInput
		);
	}

	@Mutation(() => SysPermission)
	removeSysPermission(@Args('id', { type: () => Int }) id: number) {
		return this.sysPermissionService.remove(id);
	}
}
