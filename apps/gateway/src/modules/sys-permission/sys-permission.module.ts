import { Module } from '@nestjs/common';
import { SysPermissionService } from './sys-permission.service';
import { SysPermissionResolver } from './sys-permission.resolver';

@Module({
	providers: [SysPermissionResolver, SysPermissionService],
})
export class SysPermissionModule {}
