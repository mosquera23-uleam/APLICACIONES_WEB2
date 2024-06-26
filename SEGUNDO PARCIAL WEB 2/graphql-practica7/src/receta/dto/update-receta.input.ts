import { CreateRecetaInput } from './create-receta.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRecetaInput extends PartialType(CreateRecetaInput) {
  @Field(() => Int)
  id: number;
}
