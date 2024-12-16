import { Module } from '@nestjs/common';
import { DateScalar } from '@/scalars';
import { PrismaModule } from '@/components';
import { SysUserService } from './sys-user.service';
import { SysUserResolver } from './sys-user.resolver';

@Module({
	imports: [PrismaModule],
	providers: [SysUserResolver, SysUserService, DateScalar],
})
export class SysUserModule {}
