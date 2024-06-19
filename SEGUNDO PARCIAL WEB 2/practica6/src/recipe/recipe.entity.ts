import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Preparation } from '../preparation/preparation.entity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombrePlato: string;

  @Column('simple-array')
  ingredientes: string[];

  @Column('simple-array')
  cantidades: string[];

  @Column({ default: true })
  estado: boolean;

  @OneToMany(() => Preparation, (preparation) => preparation.recipe)
  preparations: Preparation[];
}
