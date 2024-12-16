import { Injectable } from '@nestjs/common';
import { SysUser } from '@prisma/client';
import { CreateSysUserInput } from './dto/create-sys-user.input';
import { UpdateSysUserInput } from './dto/update-sys-user.input';

@Injectable()
export class SysUserService {
	create(createSysUserInput: CreateSysUserInput) {
		return 'This action adds a new sysUser';
	}

	findAll() {
		return `This action returns all sysUser`;
	}

	findOne(id: number) {
		return `This action returns a #${id} sysUser`;
	}

	update(id: SysUser['id'], updateSysUserInput: UpdateSysUserInput) {
		return `This action updates a #${id} sysUser`;
	}

	remove(id: number) {
		return `This action removes a #${id} sysUser`;
	}
}
