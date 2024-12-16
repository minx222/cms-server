import { Test, TestingModule } from '@nestjs/testing';
import { SysRoleResolver } from './sys-role.resolver';
import { SysRoleService } from './sys-role.service';

describe('SysRoleResolver', () => {
	let resolver: SysRoleResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [SysRoleResolver, SysRoleService],
		}).compile();

		resolver = module.get<SysRoleResolver>(SysRoleResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
