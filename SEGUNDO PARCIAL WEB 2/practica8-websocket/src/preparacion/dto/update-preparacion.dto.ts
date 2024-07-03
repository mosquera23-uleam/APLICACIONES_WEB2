import { IsInt, IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdatePreparacionDto {
  @IsOptional()
  @IsInt()
  id_cocinero?: number;

  @IsOptional()
  @IsInt()
  id_receta?: number;

  @IsOptional()
  @IsString()
  fecha?: string;

  @IsOptional()
  @IsString()
  hora?: string;

  @IsOptional()
  @IsNumber()
  costo?: number;

  @IsOptional()
  @IsInt()
  tiempo_estimado?: number;
}
