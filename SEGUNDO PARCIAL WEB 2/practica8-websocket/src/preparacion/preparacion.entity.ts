import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Preparacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_cocinero: number;

  @Column()
  id_receta: number;

  @Column()
  fecha: string;

  @Column()
  hora: string;

  @Column()
  costo: number;

  @Column()
  tiempo_estimado: number;
}
