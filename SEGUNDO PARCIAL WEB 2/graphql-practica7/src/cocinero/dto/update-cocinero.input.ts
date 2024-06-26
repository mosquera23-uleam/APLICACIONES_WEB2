import { CreateCocineroInput } from './create-cocinero.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCocineroInput extends PartialType(CreateCocineroInput) {
  @Field(() => Int)
  id: number;
}
