import { CreatePreparacionInput } from './create-preparacion.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePreparacionInput extends PartialType(
  CreatePreparacionInput,
) {
  @Field(() => Int)
  id: number;
}
