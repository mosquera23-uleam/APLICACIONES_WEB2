import { IsString, IsArray, IsBoolean } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  nombrePlato: string;

  @IsArray()
  ingredientes: string[];

  @IsArray()
  cantidades: string[];

  @IsBoolean()
  estado: boolean;
}
