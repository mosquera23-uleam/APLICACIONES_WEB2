import { PartialType } from '@nestjs/mapped-types';
import { CreatePreparationDto } from './create-preparation.dto';

export class UpdatePreparationDto extends PartialType(CreatePreparationDto) {}
