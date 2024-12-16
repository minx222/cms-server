import { Injectable } from '@nestjs/common';
import { CreateSysPermissionInput } from './dto/create-sys-permission.input';
import { UpdateSysPermissionInput } from './dto/update-sys-permission.input';

@Injectable()
export class SysPermissionService {
	create(createSysPermissionInput: CreateSysPermissionInput) {
		return 'This action adds a new sysPermission';
	}

	findAll() {
		return `This action returns all sysPermission`;
	}

	findOne(id: number) {
		return `This action returns a #${id} sysPermission`;
	}

	update(id: number, updateSysPermissionInput: UpdateSysPermissionInput) {
		return `This action updates a #${id} sysPermission`;
	}

	remove(id: number) {
		return `This action removes a #${id} sysPermission`;
	}
}
