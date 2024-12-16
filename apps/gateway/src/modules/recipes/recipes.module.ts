import { Module } from '@nestjs/common';
import { PrismaModule } from '@/components';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';

@Module({
	imports: [PrismaModule],
	providers: [RecipesResolver, RecipesService],
})
export class RecipesModule {}
