import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PreparationService } from './preparation.service';
import { CreatePreparationDto } from './dto/create-preparation.dto';
import { UpdatePreparationDto } from './dto/update-preparation.dto';

@Controller('preparations')
export class PreparationController {
  constructor(private readonly preparationService: PreparationService) {}

  @Post()
  async create(@Body() createPreparationDto: CreatePreparationDto) {
    const preparation =
      await this.preparationService.create(createPreparationDto);
    const { cookId, recipeId } = createPreparationDto;
    // eslint-disable-next-line prettier/prettier
    return { ...(preparation), cookId, recipeId };
  }

  @Get()
  async findAll() {
    const preparations = await this.preparationService.findAll();
    // eslint-disable-next-line prettier/prettier
    return preparations.map(preparation => ({
      ...preparation,
      cookId: preparation.cook.id,
      recipeId: preparation.recipe.id,
    }));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preparationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePreparationDto: UpdatePreparationDto,
  ) {
    return this.preparationService.update(+id, updatePreparationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.preparationService.remove(+id);
  }
}
