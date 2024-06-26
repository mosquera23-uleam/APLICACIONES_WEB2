import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

@InputType()
export class CreateRecetaInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  dificultad: string;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  tiempoPreparacion: number;

  @Field({ defaultValue: true })
  @IsBoolean()
  estado: boolean;
}
