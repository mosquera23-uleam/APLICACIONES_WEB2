import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RecetaService } from './receta.service';
import { CreateRecetaInput } from './dto/create-receta.input';
import { UpdateRecetaInput } from './dto/update-receta.input';
import { Receta } from './entities/receta.entity';

@Resolver(() => Receta)
export class RecetaResolver {
  constructor(private readonly recetaService: RecetaService) {}

  @Mutation(() => Receta)
  createReceta(
    @Args('createRecetaInput') createRecetaInput: CreateRecetaInput,
  ): Promise<Receta> {
    return this.recetaService.create(createRecetaInput);
  }

  @Query(() => [Receta], { name: 'recetas' })
  findAll(
    @Args('showDeleted', { type: () => Boolean, nullable: true })
    showDeleted?: boolean,
  ): Promise<Receta[]> {
    return this.recetaService.findAll(showDeleted);
  }

  @Query(() => [Receta], { name: 'deletedRecetas' })
  findOnlyDeleted(): Promise<Receta[]> {
    return this.recetaService.findOnlyDeleted();
  }

  @Query(() => Receta, { name: 'receta' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Receta> {
    return this.recetaService.findOne(id);
  }

  @Mutation(() => Receta)
  updateReceta(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateRecetaInput') updateRecetaInput: UpdateRecetaInput,
  ): Promise<Receta> {
    return this.recetaService.update(id, updateRecetaInput);
  }

  @Mutation(() => Receta)
  removeReceta(@Args('id', { type: () => Int }) id: number): Promise<Receta> {
    return this.recetaService.remove(id);
  }

  @Mutation(() => Receta)
  restoreReceta(@Args('id', { type: () => Int }) id: number): Promise<Receta> {
    return this.recetaService.restore(id);
  }
}
