import { Module } from '@nestjs/common';
import { SysRoleService } from './sys-role.service';
import { SysRoleResolver } from './sys-role.resolver';
import { PrismaModule } from '@/components';

@Module({
	imports: [PrismaModule],
	providers: [SysRoleResolver, SysRoleService],
})
export class SysRoleModule {}
