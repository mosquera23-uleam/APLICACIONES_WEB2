import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateCookDto {
  @IsString()
  nombre: string;

  @IsNumber()
  sueldoBasico: number;

  @IsBoolean()
  estado: boolean;
}
