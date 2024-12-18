import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SysRoleService } from './sys-role.service';
import { SysRole } from './entities/sys-role.entity';
import { CreateSysRoleInput } from './dto/create-sys-role.input';
import { UpdateSysRoleInput } from './dto/update-sys-role.input';

@Resolver(() => SysRole)
export class SysRoleResolver {
	constructor(private readonly sysRoleService: SysRoleService) {}

	@Mutation(() => SysRole)
	createSysRole(
		@Args('createSysRoleInput') createSysRoleInput: CreateSysRoleInput
	) {
		return this.sysRoleService.create(createSysRoleInput);
	}

	@Query(() => [SysRole], { name: 'findRoles' })
	findRoles() {
		return this.sysRoleService.findAll();
	}

	@Query(() => SysRole, { name: 'findRoleById' })
	findRole(@Args('id', { type: () => String }) id: string) {
		return this.sysRoleService.findOne(id);
	}

	@Mutation(() => SysRole)
	updateSysRole(
		@Args('updateSysRoleInput') updateSysRoleInput: UpdateSysRoleInput
	) {
		return this.sysRoleService.update(
			updateSysRoleInput.id,
			updateSysRoleInput
		);
	}

	@Mutation(() => SysRole)
	removeSysRole(@Args('id', { type: () => String }) id: string) {
		return this.sysRoleService.remove(id);
	}
}
