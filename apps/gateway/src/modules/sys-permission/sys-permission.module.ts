import { Module } from '@nestjs/common';
import { SysPermissionService } from './sys-permission.service';
import { SysPermissionResolver } from './sys-permission.resolver';
import { PrismaModule } from '@/components';

@Module({
	imports: [PrismaModule],
	providers: [SysPermissionResolver, SysPermissionService],
})
export class SysPermissionModule {}
