import { Module } from '@nestjs/common';
import { DateScalar } from '@/scalars';
import { SysUserService } from './sys-user.service';
import { SysUserResolver } from './sys-user.resolver';

@Module({
	providers: [SysUserResolver, SysUserService, DateScalar],
})
export class SysUserModule {}
