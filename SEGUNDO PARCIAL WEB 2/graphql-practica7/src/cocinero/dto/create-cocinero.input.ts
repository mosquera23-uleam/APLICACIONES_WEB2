import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

@InputType()
export class CreateCocineroInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Field()
  @IsNumber()
  sueldoBasico: number;

  @Field({ defaultValue: true })
  @IsBoolean()
  estado: boolean;
}
