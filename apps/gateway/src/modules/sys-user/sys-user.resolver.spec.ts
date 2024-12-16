import { Test, TestingModule } from '@nestjs/testing';
import { SysUserResolver } from './sys-user.resolver';
import { SysUserService } from './sys-user.service';

describe('SysUserResolver', () => {
	let resolver: SysUserResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [SysUserResolver, SysUserService],
		}).compile();

		resolver = module.get<SysUserResolver>(SysUserResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
