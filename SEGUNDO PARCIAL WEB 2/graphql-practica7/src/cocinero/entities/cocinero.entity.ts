import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Preparacion } from '../../preparacion/entities/preparacion.entity';

@ObjectType()
@Entity()
export class Cocinero {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  nombre: string;

  @Field()
  @Column('float')
  sueldoBasico: number;

  @Field()
  @Column({ default: true })
  estado: boolean;

  @Field(() => [Preparacion], { nullable: true })
  @OneToMany(() => Preparacion, (preparacion) => preparacion.cocinero)
  preparaciones: Preparacion[];
}
