import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreatePreparationDto {
  @IsNumber()
  cookId: number;

  @IsNumber()
  recipeId: number;

  @IsString()
  fecha: string;

  @IsString()
  hora: string;

  @IsNumber()
  costo: number;

  @IsString()
  tiempoEstimado: string;

  @IsBoolean()
  estado: boolean;
}
