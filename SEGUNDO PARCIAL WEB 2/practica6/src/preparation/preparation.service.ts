import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Preparation } from './preparation.entity';
import { CreatePreparationDto } from './dto/create-preparation.dto';
import { UpdatePreparationDto } from './dto/update-preparation.dto';

@Injectable()
export class PreparationService {
  cookRepository: any;
  recipeRepository: any;
  constructor(
    @InjectRepository(Preparation)
    private readonly preparationRepository: Repository<Preparation>,
  ) {}

  async create(
    createPreparationDto: CreatePreparationDto,
  ): Promise<Preparation> {
    const { cookId, recipeId, fecha, hora, costo, tiempoEstimado } =
      createPreparationDto;
    // Validar que los IDs de cocinero y receta sean válidos (opcional)
    const cook = await this.cookRepository.findOne({ where: { id: cookId } });
    const recipe = await this.recipeRepository.findOne({
      where: { id: recipeId },
    });
    if (!cook || !recipe) {
      throw new NotFoundException('Cocinero o receta no encontrados');
    }
    const preparation = new Preparation();
    preparation.cook = cook;
    preparation.recipe = recipe;
    preparation.fecha = fecha;
    preparation.hora = hora;
    preparation.costo = costo;
    preparation.tiempoEstimado = tiempoEstimado;
    return await this.preparationRepository.save(preparation);
  }

  async findAll(): Promise<Preparation[]> {
    return await this.preparationRepository.find();
  }

  async findOne(id: number): Promise<Preparation> {
    const preparation = await this.preparationRepository.findOne({
      where: { id },
    });
    if (!preparation) {
      throw new NotFoundException(`Preparation #${id} not found`);
    }
    return preparation;
  }

  async update(
    id: number,
    updatePreparationDto: UpdatePreparationDto,
  ): Promise<Preparation> {
    await this.preparationRepository.update(id, updatePreparationDto);
    const updatedPreparation = await this.preparationRepository.findOne({
      where: { id },
    });
    if (!updatedPreparation) {
      throw new NotFoundException(`Preparation #${id} not found`);
    }
    return updatedPreparation;
  }

  async remove(id: number): Promise<Preparation> {
    const preparation = await this.preparationRepository.findOne({
      where: { id },
    });
    if (!preparation) {
      throw new NotFoundException(`Preparation #${id} not found`);
    }
    preparation.estado = false; // Cambiamos el estado a false en lugar de eliminar físicamente
    return await this.preparationRepository.save(preparation);
  }
}
