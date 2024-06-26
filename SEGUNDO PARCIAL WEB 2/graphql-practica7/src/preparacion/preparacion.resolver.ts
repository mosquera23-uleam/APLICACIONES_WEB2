import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PreparacionService } from './preparacion.service';
import { CreatePreparacionInput } from './dto/create-preparacion.input';
import { UpdatePreparacionInput } from './dto/update-preparacion.input';
import { Preparacion } from './entities/preparacion.entity';

@Resolver(() => Preparacion)
export class PreparacionResolver {
  constructor(private readonly preparacionService: PreparacionService) {}

  @Mutation(() => Preparacion)
  createPreparacion(
    @Args('createPreparacionInput')
    createPreparacionInput: CreatePreparacionInput,
  ): Promise<Preparacion> {
    return this.preparacionService.create(createPreparacionInput);
  }

  @Query(() => [Preparacion], { name: 'preparaciones' })
  findAll(
    @Args('showDeleted', { type: () => Boolean, nullable: true })
    showDeleted?: boolean,
  ): Promise<Preparacion[]> {
    return this.preparacionService.findAll(showDeleted);
  }

  @Query(() => [Preparacion], { name: 'deletedPreparaciones' })
  findOnlyDeleted(): Promise<Preparacion[]> {
    return this.preparacionService.findOnlyDeleted();
  }

  @Query(() => Preparacion, { name: 'preparacion' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Preparacion> {
    return this.preparacionService.findOne(id);
  }

  @Mutation(() => Preparacion)
  updatePreparacion(
    @Args('id', { type: () => Int }) id: number,
    @Args('updatePreparacionInput')
    updatePreparacionInput: UpdatePreparacionInput,
  ): Promise<Preparacion> {
    return this.preparacionService.update(id, updatePreparacionInput);
  }

  @Mutation(() => Preparacion)
  removePreparacion(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Preparacion> {
    return this.preparacionService.remove(id);
  }

  @Mutation(() => Preparacion)
  restorePreparacion(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Preparacion> {
    return this.preparacionService.restore(id);
  }
}
