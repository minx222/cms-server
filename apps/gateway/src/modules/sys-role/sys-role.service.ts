import { Injectable } from '@nestjs/common';
import { CreateSysRoleInput } from './dto/create-sys-role.input';
import { UpdateSysRoleInput } from './dto/update-sys-role.input';
import { PrismaService } from '@/components';

@Injectable()
export class SysRoleService {
	constructor(private readonly prisma: PrismaService) {}

	create(createSysRoleInput: CreateSysRoleInput) {
		return this.prisma.sysRole.create({
			data: {
				...createSysRoleInput,
				createdBy: 'admin',
				updatedBy: 'admin',
				createdAt: new Date(),
				updatedAt: new Date(),
				deleted: false,
			},
		});
	}

	findAll() {
		return this.prisma.sysRole.findMany();
	}

	findOne(id: string) {
		return this.prisma.sysRole.findFirst({ where: { id } });
	}

	update(id: string, updateSysRoleInput: UpdateSysRoleInput) {
		return this.prisma.sysRole.update({
			where: { id },
			data: updateSysRoleInput,
		});
	}

	remove(id: string) {
		return this.prisma.sysRole.delete({ where: { id } });
	}
}
