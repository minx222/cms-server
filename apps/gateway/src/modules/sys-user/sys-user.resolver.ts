import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SysUserService } from './sys-user.service';
import { SysUser } from './entities/sys-user.entity';
import { CreateSysUserInput } from './dto/create-sys-user.input';
import { UpdateSysUserInput } from './dto/update-sys-user.input';

@Resolver(() => SysUser)
export class SysUserResolver {
	constructor(private readonly sysUserService: SysUserService) {}

	@Mutation(() => SysUser)
	createSysUser(
		@Args('createSysUserInput') createSysUserInput: CreateSysUserInput
	) {
		return this.sysUserService.create(createSysUserInput);
	}

	@Query(() => [SysUser], { name: 'sysUser' })
	findAll() {
		return this.sysUserService.findAll();
	}

	@Query(() => SysUser, { name: 'sysUser' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.sysUserService.findOne(id);
	}

	@Mutation(() => SysUser)
	updateSysUser(
		@Args('updateSysUserInput') updateSysUserInput: UpdateSysUserInput
	) {
		return this.sysUserService.update(
			updateSysUserInput.id,
			updateSysUserInput
		);
	}

	@Mutation(() => SysUser)
	removeSysUser(@Args('id', { type: () => Int }) id: number) {
		return this.sysUserService.remove(id);
	}
}
