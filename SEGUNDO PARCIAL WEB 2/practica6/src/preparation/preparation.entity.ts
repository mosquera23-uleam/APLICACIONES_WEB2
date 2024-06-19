import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cook } from '../cook/cook.entity';
import { Recipe } from '../recipe/recipe.entity';

@Entity()
export class Preparation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cook, (cook) => cook.preparations)
  cook: Cook;

  @ManyToOne(() => Recipe, (recipe) => recipe.preparations)
  recipe: Recipe;

  @Column()
  fecha: string;

  @Column()
  hora: string;

  @Column()
  costo: number;

  @Column()
  tiempoEstimado: string;

  @Column({ default: true })
  estado: boolean;
}
