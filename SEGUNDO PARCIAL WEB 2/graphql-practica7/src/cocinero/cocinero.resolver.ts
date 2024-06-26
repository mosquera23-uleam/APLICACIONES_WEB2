import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CocineroService } from './cocinero.service';
import { Cocinero } from './entities/cocinero.entity';
import { CreateCocineroInput } from './dto/create-cocinero.input';
import { UpdateCocineroInput } from './dto/update-cocinero.input';

@Resolver(() => Cocinero)
export class CocineroResolver {
  constructor(private readonly cocineroService: CocineroService) {}

  @Query(() => [Cocinero])
  findAllCocineros(
    @Args('showDeleted', { type: () => Boolean, nullable: true })
    @Args('dummy', { type: () => Boolean, nullable: true }) // Add a dummy argument
    showDeleted: boolean,
  ) {
    if (showDeleted === undefined) {
      return this.cocineroService.findAll(false);
    } else if (showDeleted) {
      return this.cocineroService.findAll(true);
    }
    return this.cocineroService.findOnlyDeleted();
  }

  @Mutation(() => Cocinero)
  createCocinero(
    @Args('createCocineroInput') createCocineroInput: CreateCocineroInput,
  ) {
    return this.cocineroService.create(createCocineroInput);
  }

  @Query(() => [Cocinero], { name: 'cocineros' })
  findAll(
    @Args('showDeleted', { type: () => Boolean, nullable: true })
    showDeleted: boolean,
  ) {
    if (showDeleted === undefined) {
      return this.cocineroService.findAll(false);
    } else if (showDeleted) {
      return this.cocineroService.findAll(true);
    }
    return this.cocineroService.findOnlyDeleted();
  }

  @Query(() => Cocinero, { name: 'cocinero' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cocineroService.findOne(id);
  }

  @Mutation(() => Cocinero)
  updateCocinero(
    @Args('updateCocineroInput') updateCocineroInput: UpdateCocineroInput,
  ) {
    return this.cocineroService.update(
      updateCocineroInput.id,
      updateCocineroInput,
    );
  }

  @Mutation(() => Cocinero)
  removeCocinero(@Args('id', { type: () => Int }) id: number) {
    return this.cocineroService.remove(id);
  }
}
