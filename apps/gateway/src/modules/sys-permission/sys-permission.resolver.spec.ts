import { Test, TestingModule } from '@nestjs/testing';
import { SysPermissionResolver } from './sys-permission.resolver';
import { SysPermissionService } from './sys-permission.service';

describe('SysPermissionResolver', () => {
	let resolver: SysPermissionResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [SysPermissionResolver, SysPermissionService],
		}).compile();

		resolver = module.get<SysPermissionResolver>(SysPermissionResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
