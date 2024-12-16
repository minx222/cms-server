import { Test, TestingModule } from '@nestjs/testing';
import { SysPermissionService } from './sys-permission.service';

describe('SysPermissionService', () => {
	let service: SysPermissionService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [SysPermissionService],
		}).compile();

		service = module.get<SysPermissionService>(SysPermissionService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
