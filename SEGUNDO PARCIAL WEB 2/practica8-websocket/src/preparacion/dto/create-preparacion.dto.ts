import { IsInt, IsString, IsNumber } from 'class-validator';

export class CreatePreparacionDto {
  @IsInt()
  id_cocinero: number;

  @IsInt()
  id_receta: number;

  @IsString()
  fecha: string;

  @IsString()
  hora: string;

  @IsNumber()
  costo: number;

  @IsInt()
  tiempo_estimado: number;
}
