import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/components';
import { NewRecipeInput } from './dto/new-recipe.input';

@Injectable()
export class RecipesService {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: NewRecipeInput) {
		const recipe = {
			...data,
			creationDate: new Date(),
		};
		return this.prisma.recipe.create({ data: recipe });
	}

	findAll() {
		return this.prisma.recipe.findMany();
	}

	async findById(id: string) {
		return this.prisma.recipe.findUnique({ where: { id } });
	}

	async remove(id: string) {
		const val = await this.prisma.recipe.delete({ where: { id } });
		return val;
	}
}
