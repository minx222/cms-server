import { Injectable } from '@nestjs/common';
import { CreateSysPermissionInput } from './dto/create-sys-permission.input';
import { UpdateSysPermissionInput } from './dto/update-sys-permission.input';
import { PrismaService } from '@/components';

@Injectable()
export class SysPermissionService {
	constructor(private readonly prisma: PrismaService) {}

	create(createSysPermissionInput: CreateSysPermissionInput) {
		return this.prisma.sysPermission.create({
			data: {
				...createSysPermissionInput,
				createdAt: new Date(),
				createdBy: 'admin',
				updatedBy: 'admin',
				deleted: false,
				updatedAt: new Date(),
			},
		});
	}

	findAll() {
		return this.prisma.sysPermission.findMany();
	}

	findOne(id: string) {
		return this.prisma.sysPermission.findFirst({ where: { id } });
	}

	update(id: string, updateSysPermissionInput: UpdateSysPermissionInput) {
		return this.prisma.sysPermission.update({
			where: { id },
			data: updateSysPermissionInput,
		});
	}

	remove(id: string) {
		return this.prisma.sysPermission.delete({
			where: { id },
		});
	}
}
