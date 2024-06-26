import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsBoolean,
  IsDecimal,
  IsString,
  IsNumber,
  IsDate,
} from 'class-validator';

@InputType()
export class CreatePreparacionInput {
  @Field()
  @IsDate()
  @IsNotEmpty()
  fecha: Date;

  @Field()
  @IsString()
  @IsNotEmpty()
  hora: string;

  @Field()
  @IsDecimal()
  @IsNotEmpty()
  costo: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  tiempoEstimado: number;

  @Field({ defaultValue: true })
  @IsBoolean()
  estado: boolean;

  @Field(() => Int)
  @IsNotEmpty()
  cocineroId: number;

  @Field(() => Int)
  @IsNotEmpty()
  recetaId: number;
}
