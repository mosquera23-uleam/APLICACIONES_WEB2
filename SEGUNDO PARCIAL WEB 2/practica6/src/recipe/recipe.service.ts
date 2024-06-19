import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const recipe = this.recipeRepository.create(createRecipeDto);
    return await this.recipeRepository.save(recipe);
  }

  async findAll(): Promise<Recipe[]> {
    return await this.recipeRepository.find();
  }

  async findOne(id: number): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne({ where: { id } });
    if (!recipe) {
      throw new NotFoundException(`Recipe #${id} not found`);
    }
    return recipe;
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<Recipe> {
    await this.recipeRepository.update(id, updateRecipeDto);
    const updatedRecipe = await this.recipeRepository.findOne({
      where: { id },
    });
    if (!updatedRecipe) {
      throw new NotFoundException(`Recipe #${id} not found`);
    }
    return updatedRecipe;
  }

  async remove(id: number): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne({ where: { id } });
    if (!recipe) {
      throw new NotFoundException(`Recipe #${id} not found`);
    }
    recipe.estado = false; // Cambiamos el estado a false en lugar de eliminar físicamente
    return await this.recipeRepository.save(recipe);
  }
}
