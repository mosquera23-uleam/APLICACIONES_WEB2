import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Preparacion } from '../../preparacion/entities/preparacion.entity';

@ObjectType()
@Entity()
export class Receta {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  nombre: string;

  @Field()
  @Column('text')
  descripcion: string;

  @Field()
  @Column()
  dificultad: string;

  @Field()
  @Column('int')
  tiempoPreparacion: number;

  @Field()
  @Column('boolean', { default: true })
  estado: boolean;

  @Field(() => [Preparacion], { nullable: true })
  @OneToMany(() => Preparacion, (preparacion) => preparacion.receta)
  preparaciones: Preparacion[];
}
